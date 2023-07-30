import "./App.css";
import requests from "./request";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title={"NETFLIX ORIGNALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"Trending Now"} fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
      <Row title="History Movies" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      {/* <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;

