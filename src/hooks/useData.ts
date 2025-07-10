import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]); // State variable for our games
  const [error, setError] = useState(''); // State variable for our error messages
  const [isLoading, setLoading] = useState(false);

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

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal }) // adding a configuration object
      .then(res => {
        setData(res.data.results);
      })
      .catch(err => {
        // Since on development mode react renders twice, when it unmounts the first render our error would be "Canceled Error", and when it mounts the 2nd component the error message is displayed at the top, .... so we are protecting this error to be shown
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    // This cleanup function is optionally returned from useEffect (this function), it may not always returned
    // that means it is only returned when the component is unmounted
    return () => controller.abort(); // Cleanup function
  }, [endpoint]);

  return { data, error, isLoading };
};

export default useData;
