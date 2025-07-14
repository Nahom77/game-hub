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
const useGames = (selectedGenre: Genre | null) => {
  // const genreId = selectedGenre?.id; // number | undefined
  // const deps: React.DependencyList = genreId ? [genreId] : [];

  return useData<Game>(
    '/games',
    { params: { genres: selectedGenre?.id } },
    selectedGenre ? [selectedGenre.id] : []
  );
};

export default useGames;
