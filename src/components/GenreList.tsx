import useGenres from '../hooks/useGenres';

const GenreList = () => {
  // Using the custom 'useData' hook to fetch '/genres' datas
  const { data } = useGenres();

  return (
    <ul>
      {data.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
