import MainScreen from '../../pages/main-screen/main-screen';


function App(props: { nameOfFilm: string; ganre: string; releaseDate: number}): JSX.Element {
  return (
    <MainScreen nameOfFilm={props.nameOfFilm} ganre={props.ganre} releaseDate={props.releaseDate} />
  );
}

export default App;
