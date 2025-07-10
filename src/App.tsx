import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    // Defining our layout using grid
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // layouts rendered on large devices (>1024px)
      }}
    >
      <GridItem area='nav'>
        <NavBar />
      </GridItem>

      {/* 'aside' will be shown on large devices*/}
      <Show above='lg'>
        <GridItem area='aside'>Aside</GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}
// d3f6af10bc3d4123b62aa840f61a68f6
export default App;
