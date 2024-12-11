import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  countPlaces: number;
}

function App(props : AppScreenProps) : JSX.Element {
  return (
    <MainScreen
      countPlaces={props.countPlaces}
    />
  );
}

export default App;
