import GetMovieList from "./fetchapi";
import { Counter } from "./Counter";

function App() {
  return (
    <>
      <GetMovieList year={2019}/>
      <Counter value={5} />
    </>
  );
}

export default App;
