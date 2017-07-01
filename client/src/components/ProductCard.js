import React, { Component } from 'react';
import { Col, Thumbnail, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
  handleLongName(name){
    if (name.length>21){
      return(
        <OverlayTrigger placement="top" overlay={(<Tooltip>{name}</Tooltip>)}>
          <h4 style={{ textTransform: 'uppercase' }}>{name.slice(0,19)+'...'}</h4>
        </OverlayTrigger>
      )
    }
    return <h4 style={{ textTransform: 'uppercase' }}>{name}</h4>
  }
  render() {
    return (
      <Col xs={6} md={3}>
        <Link to={`/product/${this.props.jewellery.productCode}`}>
          <Thumbnail
            src={require(`../assets/products/${this.props.jewellery.productCode}/${this.props.jewellery.productCode}-500x500.png`)}
            alt="242x200"
          >
            { this.handleLongName(this.props.jewellery.name) }
            <p>{ this.props.jewellery.price }</p>
          </Thumbnail>
        </Link>
      </Col>
    )
  }
}

export default ProductCard;
