import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    // Horizontal stack
    <HStack padding='10px'>
      {/* Logo */}
      <Image src={logo} boxSize='60px' />

      {/* Search bar */}
      <SearchInput />

      {/* Theme switching button */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
