import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
  return (
    // Defining our layout using grid
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // layouts rendered on large devices (>1024px)
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      {/* Navbar */}
      <GridItem area='nav'>
        <NavBar />
      </GridItem>

      {/* 'aside' will be shown on large devices*/}
      <Show above='lg'>
        <GridItem area='aside' paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>

      {/* Main grid */}
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
// d3f6af10bc3d4123b62aa840f61a68f6
export default App;
