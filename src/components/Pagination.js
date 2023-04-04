import React from 'react'
import ReactPaginate from 'react-paginate';
const PaginationCompenent = ({getpage,pagecount}) => {
    const handlePageClick = (data) => {
        getpage(data.selected + 1)
    }
    const pageCount = pagecount > 500 ? 500 : pagecount;
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            containerClassName={'pagination justify-content-center p-3'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            nextClassName={'page-item'}     
            previousLinkClassName={'page-link'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
        />
    )
}

export default PaginationCompenent