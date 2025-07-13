import useData from './useData';

export interface Genre {
  id: number;
  name: string;
}

//  useGenres function will return 'useData' function which will contain datas about the genres
const useGenres = () => useData<Genre>('/genres');
export default useGenres;
