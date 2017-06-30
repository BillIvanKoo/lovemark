import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Pagination } from 'react-bootstrap';

import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state={
      jewelleries: [...this.props.jewelleries],
      currentPage: 1,
      productPerPage: 12,
    }
  }

  componentWillMount() {
    if (this.props.match.params.type){
      this.setState({
        jewelleries: this.state.jewelleries.filter(jewellery=>jewellery.type === this.props.match.params.type)
      });
    } else if (this.props.match.params.category){
      this.setState({
        jewelleries: this.state.jewelleries.filter(jewellery=>jewellery.category === this.props.match.params.category)
      });
    }
  }

  handlePage(e) {
    console.log();
    this.setState({
      currentPage: e
    });
  }

  render() {
    const { jewelleries, currentPage, productPerPage } = this.state;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = jewelleries.slice(indexOfFirstProduct, indexOfLastProduct);
    let pageLength = 0;
    for (let i = 0; i <= Math.floor(jewelleries.length / productPerPage); i++) {
      pageLength+=1;
    }
    return (
      <div style={{ padding: '5%' }}>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Select</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="featured">featured</option>
            <option value="pricelowtohigh">Price: Low to High</option>
            <option value="pricehightolow">Price: High to Low</option>
          </FormControl>
        </FormGroup>
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          items={pageLength}
          maxButtons={3}
          activePage={currentPage}
          onSelect={e=>{ this.handlePage(e) }}
        />
        <div>
        {currentProducts.map(jewellery =>(
          <ProductCard key={jewellery.productCode} jewellery={jewellery} />
        ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jewelleries: state.jewelleries,
})

export default connect(mapStateToProps)(ProductList);
