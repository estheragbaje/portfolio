import React from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import NextLink from 'next/link';

function NavLink({ href, children, ...rest }) {
  return (
    <NextLink href={href} passHref {...rest}>
      <ChakraLink mx='4' fontWeight='bold'>
        {children}
      </ChakraLink>
    </NextLink>
  );
}

export default NavLink;
