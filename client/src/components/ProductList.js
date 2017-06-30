import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col, FormGroup, ControlLabel, FormControl, Pagination } from 'react-bootstrap';

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
        jewelleries: [...this.state.jewelleries.filter(jewellery=>jewellery.type === this.props.match.params.type)]
      });
    } else if (this.props.match.params.category){
      this.setState({
        jewelleries: [...this.state.jewelleries.filter(jewellery=>jewellery.category === this.props.match.params.category)]
      });
    }
  }

  handlePage(e) {
    console.log();
    this.setState({
      currentPage: e
    });
  }

  handleSort(value) {
    if (value === 'featured'){
      this.setState({
        jewelleries: this.state.jewelleries.sort((a,b)=>{
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
        })
      })
    }
    if (value === 'pricelowtohigh'){
      this.setState({
        jewelleries: this.state.jewelleries.sort((a,b)=>Number(a.price.replace(/(^\$|,)/g,''))-Number(b.price.replace(/(^\$|,)/g,'')))
      })
    }
    if (value === 'pricehightolow'){
      this.setState({
        jewelleries: this.state.jewelleries.sort((a,b)=>Number(b.price.replace(/(^\$|,)/g,''))-Number(a.price.replace(/(^\$|,)/g,'')))
      })
    }
  }

  render() {
    const { jewelleries, currentPage, productPerPage } = this.state;
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;
    const currentProducts = jewelleries.slice(indexOfFirstProduct, indexOfLastProduct);
    let pageLength = 0;
    for (let i = 0; i < Math.ceil(jewelleries.length / productPerPage); i++) {
      pageLength+=1;
    }
    return (
      <div style={{ padding: '5%' }}>
        <Col xs={12} md={3}>
        <FormGroup>
          <ControlLabel>Sort</ControlLabel>
          <FormControl componentClass="select" onChange={(e)=>{this.handleSort(e.target.value)}}>
            <option value="featured">Featured</option>
            <option value="pricelowtohigh">Price: Low to High</option>
            <option value="pricehightolow">Price: High to Low</option>
          </FormControl>
        </FormGroup>
        </Col>
        <Col xs={12} md={9} style={{textAlign: 'right'}}>
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
        </Col>
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
