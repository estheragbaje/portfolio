import React from 'react';
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';
import NavLink from './NavLink';

//Modify your navigation here
const navArray = [
  {
    name: 'Home',
    href: '/href',
  },
  {
    name: 'About',
    href: '/href',
  },
  {
    name: 'Porfolio',
    href: '/href',
  },
  {
    name: 'Stack',
    href: '/href',
  },
  {
    name: 'Contact',
    href: '/href',
  },
];

function TopBanner() {
  return (
    <Box>
      <Box bg='red.500' h='10px' />
      <Box bg='gray.100'>
        <Center py='12'>
          {navArray.map((item) => {
            return (
              <NavLink href={item.href} key={item.index}>
                {item.name}
              </NavLink>
            );
          })}
        </Center>

        <VStack spacing='8' py='100px'>
          <Text textTransform='uppercase'>Front end developer</Text>
          <Heading>Hello, I'm Sade</Heading>
          <Button variant='solid' colorScheme='red' size="lg">
            Contact Me
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
export default TopBanner;
