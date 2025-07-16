import { SimpleGrid, Text } from '@chakra-ui/react';

// import { li, ul } from 'framer-motion/client';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import useGames from '../hooks/useGames';

import type { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  let counter = 1;
  const skeletons = Array.from({ length: 23 }, () => (counter += 1)); // To display just 6 skeletons

  /* If there is an error to display it */
  if (error) return <Text>{error}</Text>;

  return (
    <>
      {/* Grid container with responsive columns in each device scales */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding='10px'
        spacing={6}
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
