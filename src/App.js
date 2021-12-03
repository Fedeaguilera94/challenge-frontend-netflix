import "./App.css";
import Movie from "./components/movie/Movie";
import NavBar from "./components/navbar/NavBar";
import Section from "./components/section/Section";
let API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const url = {
    netflix: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
    popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  };

  return (
    <>
      <NavBar />

      <div>
        <Section title={"TOP"} url={url.popular} />
      </div>
      <div>
        <Section title={"ORIGINAL NETFLIX"} url={url.netflix} />
      </div>
    </>
  );
}

export default App;
