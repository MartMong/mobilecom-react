import React, { Component } from 'react'
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'
import ModalImage from 'react-modal-image'

class Tables extends Component {
  render() {
    console.log(this.props)
    const {data} = this.props
    // const data = this.props.location.state.options;
    var productList = data.map( e=>{
      return(
        <Tr style={{border: '1px solid black'}}>
          <Td style={{textAlign:'center'}}>{e.productID}</Td>
          <Td style={{textAlign:'center'}}>{e.brand}</Td>
          <Td style={{textAlign:'center'}}>{e.model}</Td>
          <Td style={{textAlign:'center'}}>{e.details[0]}</Td>
          <Td style={{textAlign:'center'}}>{e.details[1]}</Td>
          
          <ModalImage style={{textAlign:'center'}}
            small={e.pictures[0]}
            large={e.pictures[0]}
            alt="Hello World!"
          />
          <Td style={{textAlign:'center'}}>{e.quantity}</Td>
        </Tr>
      )
    })
    return (
      <Table>
        <Thead>
          <Tr>
            <Th style={{textAlign:'center'}}>Product Id</Th>
            <Th style={{textAlign:'center'}}>Brand</Th>
            <Th style={{textAlign:'center'}}>Model</Th>
            <Th style={{textAlign:'center'}}>detail one</Th>
            <Th style={{textAlign:'center'}}>detail two</Th>
            <Th style={{textAlign:'center'}}>Photo</Th>
            <Th style={{textAlign:'center'}}>Quantity</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productList}
        </Tbody>
      </Table>

    )
  }
}

export default Tables;

