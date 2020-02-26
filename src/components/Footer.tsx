import React from 'react';
import { Flex, Link, Text } from 'rebass';
import Octocat from '../vectors/Octocat';

const Footer = () => (
  <Flex
    as="footer"
    justifyContent="flex-end"
    backgroundColor="footerBackgroundColor"
    padding="15px 32px"
    sx={{ alignItems: 'center' }}
  >
    <Text variant="body" sx={{ flexGrow: 1 }}>
      Made with ❤ in Boston
    </Text>
    <Link href="https://github.com/tninesling">
      <Octocat />
    </Link>
  </Flex>
);

export default Footer;
