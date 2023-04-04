import React from 'react'
import logo from '../images/logo.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Navbar = ({ search }) => {
  const onSearch = (word) => {
    search(word)
  }
  return (
    <div className='nav-style w-100'>
      <Container>
        <Row className='pt-2'>
          <Col cs='2' lg='1'>
            <a href='/'><img className='logo' src={logo} alt='dfs' /></a>
          </Col>
          <Col xs='10' lg='11' className='d-flex align-items-center'>
            <div className='search w-100'>
              <i className='fa fa-search'></i>
              <input onChange={(e) => onSearch(e.target.value)} type='text' className='form-control' placeholder='search' />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Navbar
