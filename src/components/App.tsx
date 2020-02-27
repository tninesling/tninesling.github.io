import React, { useState } from 'react';
import { Box, Flex } from 'rebass';
import { ThemeProvider } from 'emotion-theming';
import debounce from 'lodash/debounce';
import theme from '../themes/nightTheme';
import Header from './Header';
import Desk from '../vectors/Desk';
import Skyline from '../vectors/Skyline';
import Bricks1 from '../vectors/Bricks1';
import Bricks2 from '../vectors/Bricks2';
import Bricks3 from '../vectors/Bricks3';
import Footer from './Footer';

const transitionTiming = '1s';
const clipPathTransition = `clip-path ${transitionTiming}`;
const transformTransition = `transform ${transitionTiming}`;
const maxWidth = '2000px'; // Animations look better when you can see them relative to each other

// Manipulating clip-path here mimics the rectangle being a window
// by revealing different parts of the underlying vector as if it
// were in a layer behind everything else.
const leftWindowClipPath = 'inset(0 140px 20px 20px round 50px)';
// Calculation for window transform: (change-in-clip-path / 2)
// This will offset the movement from the clip-path transition.
const leftWindowTransform = 'translateX(60px)';

const rightWindowClipPath = 'inset(0 20px 20px 140px round 50px)';
const rightWindowTransform = 'translateX(-60px)';

const App = () => {
  const [isLeftPerspective, setIsLeftPerspective] = useState(true);

  // Moving the mouse left shifts perspective so it is as if you are viewing from the right.
  // Moving the mouse right shifts perspective so it is as if you are viewing from the left.
  // This handler takes `movementX` instead of a `MouseEvent` because the value
  // of `movementX` needs to be cached (by destructuring it when passed to
  // `onMouseMove`). The caching prevents access of nullified fields on
  // React's pooled synthetic event when this function is debounced.
  const handleMouseMove = (movementX: number) => {
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

  // The mousemove event is a stream, which means any onMouseMove handler will be invoked
  // many times. Debounce pools many actions in succession and takes one, so even if there
  // are many mousemove events, the handler will only be invoked with the last one.
  const handleMouseMoveDebounced = debounce(handleMouseMove, 10, {
    leading: true,
    maxWait: 1000,
  });

  const getWindowClipPath = () => (isLeftPerspective ? leftWindowClipPath : rightWindowClipPath);
  const getWindowTransform = () => (isLeftPerspective ? leftWindowTransform : rightWindowTransform);

  return (
    <ThemeProvider theme={theme}>
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
        <Flex width="100%" maxWidth={maxWidth} justifyContent="space-evenly" sx={{ zIndex: 1 }}>
          <Box
            backgroundColor="secondaryBackgroundColor"
            padding="40px 80px 0 80px"
            height="fit-content"
            sx={{
              clipPath: getWindowClipPath(),
              transform: getWindowTransform(),
              transition: `${clipPathTransition}, ${transformTransition}`,
              flexShrink: '0',
            }}
            onMouseMove={(event: { movementX: number }) =>
              handleMouseMoveDebounced(event.movementX)
            }
          >
            <Skyline />
          </Box>
          <Bricks1 />
          <Box alignSelf="center">
            <Bricks2 />
          </Box>
        </Flex>
        <Flex width="100%" maxWidth={maxWidth} justifyContent="space-evenly" alignItems="center">
          <Bricks3 />
          <Desk />
        </Flex>
      </Flex>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
