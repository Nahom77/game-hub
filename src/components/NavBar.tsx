import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    // Horizontal stack
    <HStack justifyContent='space-between' padding='10px'>
      {/* Logo */}
      <Image src={logo} boxSize='60px' />

      {/* Search bar */}
      <Text>NavBar</Text>

      {/* Theme switching button */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
