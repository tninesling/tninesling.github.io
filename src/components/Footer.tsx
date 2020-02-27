import React from 'react';
import { Flex, Link, Text } from 'rebass';
import Octocat from '../vectors/Octocat';

const Footer = () => (
  <Flex as="footer" alignItems="center" backgroundColor="footerBackgroundColor" padding="15px 32px">
    <Text variant="body" sx={{ flexGrow: 1 }}>
      Made with ❤ in Boston
    </Text>
    <address>
      <Link href="https://github.com/tninesling">
        <Octocat />
      </Link>
    </address>
  </Flex>
);

export default Footer;
