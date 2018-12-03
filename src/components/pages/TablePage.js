import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class TablePage extends Component {


  render() {
    console.log(this.props.location.state.options)
    const data = this.props.location.state.options;
    var productList = data.map( e=>{
      return(
        <Tr>
          <Td>{e.productID}</Td>
          <Td>{e.brand}</Td>
          <Td>{e.model}</Td>
          <Td>{e.details[0]}</Td>
          <Td>{e.details[1]}</Td>
          <img 
            style={{
            maxWidth:'230px',
            maxHeight:'95px',
            width: 'auto',
            height: 'auto',
            borderBottom:10
          }} 
            src={e.pictures[0]}
          />
          <Td>{e.quantity}</Td>
        </Tr>
      )
    })
    return (
      <Table>
        <Thead>
          <Tr>
            <Th>Product Id</Th>
            <Th>Brand</Th>
            <Th>Model</Th>
            <Th>detail one</Th>
            <Th>detail two</Th>
            <Th>Photo</Th>
            <Th>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productList}
        </Tbody>
      </Table>

    )
  }
}

export default TablePage;

