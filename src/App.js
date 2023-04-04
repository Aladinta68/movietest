import { Container } from "react-bootstrap"
import Navbar from './components/Navbar';
import Movielist from './components/Movielist';
import Moviedetails from "./components/Moviedetails";
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  const [movies, setMovies] = useState([]);
  const [pagecount, setpagecount] = useState(0);
  ///get all movie by axios
  const getallmovie = async () => {
    const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=f9ddbeb3ce54f8ff8862ebd41009f9f5&language=en")
    setMovies(res.data.results)
    setpagecount(res.data.total_pages)
  }

  ////get current page
  const getpage = async (page) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f9ddbeb3ce54f8ff8862ebd41009f9f5&page=${page}&language=en`)
    setMovies(res.data.results)
    setpagecount(res.data.total_pages)

  }
  useEffect(() => {
    getallmovie()
  }, []);
  // to search film
  const search = async (word) => {
    if (word === "") {
      getallmovie();
    } else {
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=f9ddbeb3ce54f8ff8862ebd41009f9f5&query=${word}&language=en`)
      setMovies(res.data.results)
      setpagecount(res.data.total_pages)
    }
  }
  return (
    <div className="font color-body">
      <Navbar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Movielist movies={movies} getpage={getpage} pagecount={pagecount} />} />
            <Route path="/movie/:id" element={<Moviedetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
