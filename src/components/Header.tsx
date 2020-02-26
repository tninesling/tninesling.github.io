import React from 'react';
import { Flex } from 'rebass';
import Logo from '../vectors/Logo';

const Header = () => (
  <Flex as="header" alignItems="center" backgroundColor="footerBackgroundColor" padding="15px 32px">
    <Logo />
  </Flex>
);

export default Header;
