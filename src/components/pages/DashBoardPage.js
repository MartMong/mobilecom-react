import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard';
import { Row } from 'reactstrap';

import { getAllProduct } from '../../redux/actions/product'

class DashBoardPage extends Component {

  componentDidMount(){
    this.props.getAllProduct()
  }

  createCards = () => {
    const cards = this.props.products.products;
    console.log(this.props)
    let CardsComp = [];
    if (cards != undefined){
      cards.forEach(item => {
        CardsComp.push(<ProductCard key={item.productID} pictures={item.pictures} details={item.details} brand={item.brand}/>)
      })
      return <Row>{CardsComp}</Row>;
    }
    // const CardsComp = cards.map((item) =>
    //   console.log(item)
      // <ProductCard key={item.productID} pictures={item.pictures} details={item.details}/>
    // );
    // return <div>{CardsComp}</div>
  }

  render() {
    // console.log(this.props.products)
    // console.log(this.props)
    this.createCards()
    return (
      <div>
        <h1>DashBoard</h1>
        {this.createCards()}
      </div>
      
    )
  }
}

const mapStateToProps = (state) => {
  return (
    {
      products: state.product
    }
  )
}


DashBoardPage.propTypes = {
  getAllProduct: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired
}

export default connect(mapStateToProps, { getAllProduct })(DashBoardPage);
