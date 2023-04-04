import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const Moviedetails = () => {
const [movie, setmovie] = useState([]);
  const param = useParams();
    ///get movie details
    const getmoviedetails = async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=f9ddbeb3ce54f8ff8862ebd41009f9f5&language=en`)
      setmovie(res.data)
    }
    useEffect(() => {
      getmoviedetails();
    }, []);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-4 ">
          <div className="card-detalis  d-flex align-items-center ">
            <img
              className="img-movie w-30"
              src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
              alt="ascad"
            />
            <div className="justify-content-center text-center  mx-auto">
              <p className="card-text-details border-bottom">Name : {movie.original_title} </p>
              <p className="card-text-details border-bottom">Release date : {movie.release_date}</p>
              <p className="card-text-details border-bottom">Vote count : {movie.vote_count}</p>
              <p className="card-text-details border-bottom">Rate : {movie.vote_average}</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12" className="mt-1 ">
          <div className="card-story  d-flex flex-column align-items-start">
            <div className="text-end p-4 ">
              <p className="card-text-title border-bottom">Story : </p>
            </div>
            <div className="text-end px-2">
              <p className="card-text-story">{movie.overview}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="10" xs="12" sm="12" className="mt-2 d-flex justify-content-center ">
          <Link to={'/'}><button style={{ backgroundColor: "#b45b35", border: "none" }} className="btn btn-primary mx-2">Return home page</button>
          </Link>
          <a href={movie.homepage}><button style={{ backgroundColor: "#b45b35", border: "none" }} className="btn btn-primary">Watch</button></a>
        </Col>
      </Row>
    </div>
  )
}

export default Moviedetails
