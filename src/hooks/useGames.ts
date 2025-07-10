import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

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

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]); // State variable for our games
  const [error, setError] = useState(''); // State variable for our error messages

  useEffect(() => {
    // For handling cancellation
    // Our cancellation function is executed when a user goes away from that page OR the component is unmounted
    const controller = new AbortController();
    //  AbortController - is built in class in modern browsers that allows us to
    //    cancel or abort async operations like fetch request, DOM manipulation or any operation that may take long time to complete

    ///////////////////////////////////////////////////
    // The use cancelling requests is to avoid background running of
    // the fetch request when the user is not in that page.
    /////////////////////////////////////////////////

    apiClient
      .get<FetchGamesResponse>('/games', { signal: controller.signal }) // adding a configuration object
      .then(res => {
        setGames(res.data.results);
      })
      .catch(err => {
        // Since on development mode react renders twice, when it unmounts the first render our error would be "Canceled Error", and when it mounts the 2nd component the error message is displayed at the top, .... so we are protecting this error to be shown
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    // This cleanup function is optionally returned from useEffect (this function), it may not always returned
    // that means it is only returned when the component is unmounted
    return () => controller.abort(); // Cleanup function
  }, []);

  return { games, error };
};

export default useGames;
