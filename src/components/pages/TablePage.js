import React, { Component } from 'react'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import Table from '../Table';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';


class TablePage extends Component {

  state = {
    currentPage: 1,
    productPerPage: 5
  };



  handleClick = (event) => {
    console.log(event.target.id)
    this.setState({
      currentPage: event.target.id
    })
  }

  render() {
    const { currentPage, productPerPage } = this.state;
    const data = this.props.location.state.options;

    // Logic for displaying current todos
    const indexOfLastTodo = currentPage * productPerPage;
    const indexOfFirstTodo = indexOfLastTodo - productPerPage;
    const currentProducts = data.slice(indexOfFirstTodo, indexOfLastTodo);

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(data.length / productPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <PaginationItem>
          <PaginationLink
            key={number}
            id={number}
            onClick={this.handleClick}
          >
            {number}
          </PaginationLink>
        </PaginationItem>
      );
    });

    return (
      <div>
        <Table data={currentProducts} />
        <Pagination aria-label="Page navigation example" 
        //   style={{
        //     position: 'absolute',
        //     right: '100px'
        // }}
        >
          <PaginationItem >
            <PaginationLink previous onClick={() => this.setState({ currentPage: this.state.currentPage - 1 != 0 ? this.state.currentPage - 1 : 1 })} />
          </PaginationItem>
          {renderPageNumbers}
          <PaginationItem>
            <PaginationLink next onClick={() => this.setState({ currentPage: this.state.currentPage + 1 <= pageNumbers.length ? this.state.currentPage + 1 : this.state.currentPage })} />
          </PaginationItem>
        </Pagination>
      </div>
    )
  }
}

export default TablePage;

