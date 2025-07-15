// import type { DependencyList } from 'react';
import useData from './useData';
import type { Genre } from './useGenres';

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
const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  return useData<Game>(
    '/games',
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    selectedGenre || selectedPlatform
      ? [selectedGenre?.id, selectedPlatform?.id]
      : []
  );
};

export default useGames;
