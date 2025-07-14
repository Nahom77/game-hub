import { SimpleGrid, Text } from '@chakra-ui/react';

// import { li, ul } from 'framer-motion/client';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6]; // To display just 6 skeletons

  return (
    <>
      {/* If there is an error to display it */}
      {error && <Text>{error}</Text>}

      {/* Grid container with responsive columns in each device scales */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding='10px'
        spacing={3}
      >
        {/* Displaying skeletons during loading state  */}
        {isLoading &&
          skeletons.map(skeleton => <GameCardSkeleton key={skeleton} />)}

        {/* When the data finished fetching from api displaying it */}
        {data.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
