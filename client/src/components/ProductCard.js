import React, { Component } from 'react';
import { Col, Thumbnail } from 'react-bootstrap';

class ProductCard extends Component {
  render() {
    console.log('length');
    return (
      <Col xs={6} md={3}>
        <Thumbnail
          src={require(`../assets/products/${this.props.jewellery.productCode}/${this.props.jewellery.productCode}-500x500.png`)}
          alt="242x200"
        >
          <h4 style={{ textTransform: 'uppercase' }}>{ this.props.jewellery.name }</h4>
          <p>{ this.props.jewellery.price }</p>
        </Thumbnail>
      </Col>
    )
  }
}

export default ProductCard;
