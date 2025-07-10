import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';
// import { li, ul } from 'framer-motion/client';

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]); // State variable for our games
  const [error, setError] = useState(''); // State variable for our error messages

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/xgames')
      .then(res => {
        setGames(res.data.results);
      })
      .catch(err => setError(err.message));
  });

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map(game => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
