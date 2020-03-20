import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex } from 'rebass';
import throttle from 'lodash/throttle';
import Hammer from 'hammerjs';
import ContextualThemeProvider from './ContextualThemeProvider';
import Header from './Header';
import Desk from '../vectors/Desk';
import Skyline from '../vectors/Skyline';
import Bricks1 from '../vectors/Bricks1';
import Bricks2 from '../vectors/Bricks2';
import Bricks3 from '../vectors/Bricks3';
import Footer from './Footer';

// Animations look better when you can see them relative to each other
const maxWidth = '2000px';

const App = () => {
  const windowRef = useRef<HTMLDivElement>(null);
  const [isLeftPerspective, setIsLeftPerspective] = useState(true);

  // Moving the mouse left shifts perspective so it is as if you are viewing from the right.
  // Moving the mouse right shifts perspective so it is as if you are viewing from the left.
  // This handler takes `movementX` instead of a `MouseEvent` because the value
  // of `movementX` needs to be cached (by destructuring it when passed to
  // `onMouseMove`). The caching prevents access of nullified fields on
  // React's pooled synthetic event when this function is debounced.
  const setPerspectiveByXMovement = (movementX: number) => {
    const movedRight = movementX > 0;
    const movedLeft = !movedRight;
    const movedRightWhileInLeftPerspective = isLeftPerspective && movedRight;
    const movedLeftWhileInRightPerspective = !isLeftPerspective && movedLeft;
    const perspectiveShouldChange =
      movedRightWhileInLeftPerspective || movedLeftWhileInRightPerspective;
    if (perspectiveShouldChange) {
      setIsLeftPerspective(movementX < 0);
    }
  };

  useEffect(() => {
    const manager = new Hammer.Manager(windowRef.current);
    const swipe = new Hammer.Swipe();
    manager.add(swipe);

    manager.on('swipe', event => {
      setPerspectiveByXMovement(-1 * event.deltaX);
    });
  }, [windowRef.current]);

  // The mousemove event is a stream, which means any onMouseMove handler will be invoked
  // many times. Throttle pools many actions in succession and takes one, so even if there
  // are many mousemove events, the handler will only be invoked with the last one.
  const setPerspectiveByXMovementThrottled = throttle(setPerspectiveByXMovement, 100, {
    trailing: true,
  });

  // Manipulating clip-path here mimics the rectangle being a window
  // by revealing different parts of the underlying vector as if it
  // were in a layer behind everything else.
  const getWindowClipPath = () =>
    isLeftPerspective
      ? 'inset(0 140px 20px 20px round 50px)'
      : 'inset(0 20px 20px 140px round 50px)';
  const getWindowLeftPosition = () => (isLeftPerspective ? '60px' : '-60px');

  return (
    <ContextualThemeProvider>
      <Header />
      <Flex
        width="100%"
        minHeight="100vh"
        backgroundColor="primaryBackgroundColor"
        paddingTop="100px"
        overflow="hidden"
        flexDirection="column"
        alignItems="center"
      >
        <Flex
          width="100%"
          maxWidth={maxWidth}
          justifyContent="space-evenly"
          alignItems="flex-end"
          flexWrap="wrap-reverse"
        >
          <Box
            backgroundColor="skyColor"
            padding="40px 80px 0 80px"
            height="fit-content"
            sx={{
              position: 'relative',
              left: getWindowLeftPosition(),
              clipPath: getWindowClipPath(),
              transition: 'clip-path 1s, left 1s',
              flexShrink: 0,
            }}
            onMouseMove={(event: { movementX: number }) =>
              setPerspectiveByXMovementThrottled(event.movementX)
            }
            ref={windowRef}
          >
            <Skyline />
          </Box>
          <Box margin="50px">
            <Bricks1 />
          </Box>
          <Box alignSelf="center" margin="50px">
            <Bricks2 />
          </Box>
        </Flex>
        <Flex
          width="100%"
          maxWidth={maxWidth}
          justifyContent="space-evenly"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box margin="50px">
            <Bricks3 />
          </Box>
          <Box marginLeft="50px">
            <Desk />
          </Box>
        </Flex>
      </Flex>
      <Footer />
    </ContextualThemeProvider>
  );
};

export default App;
