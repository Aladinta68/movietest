import React from 'react'
import Cardmovie from './Cardmovie';
import { Row } from 'react-bootstrap';
import PaginationCompenent from './Pagination';
const Movielist = ({ movies,getpage,pagecount }) => {
  return (
    <Row className='mt-3'>
      {
        movies.length >= 1 ? (
          movies.map((mov) => {
            return (<Cardmovie key={mov.id} mov={mov} />)
          })
        ) : <h2 className='text-center p-5'>there is no film</h2>
      }

      {movies.length >= 1 ?( <PaginationCompenent getpage={getpage} pagecount={pagecount}/>):null}
    </Row >
  )
}

export default Movielist
