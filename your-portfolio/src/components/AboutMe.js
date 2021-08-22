import React from 'react';
import {
  Stack,
  HStack,
  VStack,
  Box,
  Image,
  Heading,
  Text,
  Button,
  Icon,
  Center,
  Link,
} from '@chakra-ui/react';
import {
  AiFillLinkedin,
  AiOutlineTwitter,
  AiOutlineGithub,
} from 'react-icons/ai';

function AboutMe() {
  return (
    <Stack
      direction={['column', 'column', 'row']}
      spacing='24'
      p={['8', '12', '24']}
    >
      <Image
        maxH='550px'
        maxW='500px'
        objectFit='cover'
        borderRadius='lg'
        src='https://bit.ly/sage-adebayo'
        alt='Segun Adebayo'
      />
      <VStack spacing='6'>
        <Heading>About me</Heading>
        <Text>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old.
        </Text>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Text>
        <Text>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </Text>
        <Button variant='ghost' textTransform='uppercase' colorScheme='red'>
          Download my Resume
        </Button>
        <Center>
          <HStack spacing='2' mx='4'>
            <Icon as={AiOutlineTwitter} w={6} h={6} color='' />
            <Link href='#'>Twitter</Link>
          </HStack>
          <HStack spacing='2' mx='4'>
            <Icon as={AiOutlineGithub} w={6} h={6} />
            <Link href='#'>Github</Link>
          </HStack>
          <HStack spacing='2' mx='4'>
            <Icon as={AiFillLinkedin} w={6} h={6} />
            <Link href='#'>LinkedIn</Link>
          </HStack>
        </Center>
      </VStack>
    </Stack>
  );
}

export default AboutMe;
