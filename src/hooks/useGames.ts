// import type { DependencyList } from 'react';
import type { GameQuery } from '../App';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  parent_platforms: { platform: Platform }[];
}

//  useGames function will return 'useData' function which will contain datas about the games
const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
    // selectedGenre || selectedPlatform
    //   ? [selectedGenre?.id, selectedPlatform?.id]
    //   : []
  );
};

export default useGames;
