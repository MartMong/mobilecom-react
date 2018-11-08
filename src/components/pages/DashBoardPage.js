import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ProductCard from '../ProductCard';
import {Row} from 'reactstrap';
class DashBoardPage extends Component {

  cards = () => {
    let cards = [];
    for (let i = 0; i < 20; i++) {
      {
        cards.push(<ProductCard/>);
      }
    }
    return <Row>{cards}</Row>;
  }



  render() {
    return (
      <div style={{ marginTop: '100px' }}>
        {this.cards()}
      </div>
    )
  }
}



export default DashBoardPage;
