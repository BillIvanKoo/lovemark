import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductCard from './ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state={
      jewelleries: [],
    }
  }
  componentWillMount() {
    if (this.props.match.params.type){
      this.setState({
        jewelleries: this.props.jewelleries.filter(jewellery=>jewellery.type === this.props.match.params.type)
      });
    } else if (this.props.match.params.category){
      this.setState({
        jewelleries: this.props.jewelleries.filter(jewellery=>jewellery.category === this.props.match.params.category)
      });
    } else {
      this.setState({
        jewelleries: this.props.jewelleries
      })
    }
  }
  render() {
    return (
      <div style={{ padding: '5%' }}>
        {this.state.jewelleries.map(jewellery =>(
          <ProductCard key={jewellery.productCode} jewellery={jewellery} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jewelleries: state.jewelleries,
})

export default connect(mapStateToProps)(ProductList);
