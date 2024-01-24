
import { useCharactersData } from '../../../services/queryClient';

export const MainPage = () => {

  const {data, isFetching} = useCharactersData()
  console.log('teste2', data)
  
  return (
    <div className="main-page">
    
      <h1>Main Page</h1>
      {isFetching && <h1>Carregando...</h1>}
      <ul>
        {data?.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

