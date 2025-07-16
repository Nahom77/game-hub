import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    // Horizontal stack
    <HStack padding='10px'>
      {/* Logo */}
      <Image src={logo} boxSize='60px' />

      {/* Search bar */}
      <SearchInput onSearch={onSearch} />

      {/* Theme switching button */}
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
