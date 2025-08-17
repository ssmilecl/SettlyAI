import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  type Suburb = {
    suburbName: string;
    state: string;
    suburbId: number;
  };

  //todo: change to fetch suburb id by suburb name and state
  //check database to match for testing
  const melbourne = { suburbName: 'Melbourn', state: 'VIC', suburbId: 1 };
  const sydney = { suburbName: 'Sydney', state: 'NSW', suburbId: 2 };

  const checkSuburb = (suburb: Suburb) => {
    const { suburbName, state, suburbId } = suburb;

    localStorage.setItem('suburbId', suburbId.toString());

    const encodedLocation = `${state}+${suburbName}`;
    navigate(`/suburb/${encodedLocation}`, { state: { suburbId } });
  };

  return (
    <>
      <h1>Home</h1>
      <button onClick={() => checkSuburb(sydney)}>Go to Sydney</button>
      <button onClick={() => checkSuburb(melbourne)}>Go to Melbourne</button>
    </>
  );
};

export default HomePage;
