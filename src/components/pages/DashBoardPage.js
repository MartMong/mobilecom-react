import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard';
import {Row} from 'reactstrap';

import {getAllProduct} from '../../redux/actions/product'

class DashBoardPage extends Component {

  // cards = () => {
  //   let cards = [];
  //   for (let i = 0; i < 20; i++) {
  //     {
  //       cards.push(<ProductCard/>);
  //     }
  //   }
  //   return <Row>{cards}</Row>;
  // }
  
  componentDidMount(){
    this.props.getAllProduct()
  }

  render() {
    console.log(this.props)
    return (
      <h1>DashBoard</h1>
      // <div style={{ marginTop: '100px' }}>
      //   {this.cards()}
      // </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return(
//     {
//       products:state.products
//     }
//   )
// }

export default connect(null,{getAllProduct})(DashBoardPage);
