import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import { ReactImageMagnifyTouch } from 'react-image-magnify';
import { connect } from 'react-redux';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state= {
      selectedImage: 1,
      product: {},
      currentImage: '',
    }
  }

  componentWillMount() {
    if (this.props.match.params.id){
      this.setState({
        product: this.props.jewelleries.filter(jewellery=>jewellery.productCode===this.props.match.params.id)[0],
        currentImage: this.props.jewelleries.filter(jewellery=>jewellery.productCode===this.props.match.params.id)[0].images[0]
      });
    }
  }

  handleOneImage(product) {
    if (product.images.length > 1){
      return product.images.map(image => (
        <Image
          src={require(`../assets/products/${product.productCode}/${image}-120x120.jpg`)}
          responsive
          onMouseEnter={()=>{this.setState({
            currentImage: image,
          })}}
        />
      ))
    }
  }

  render() {
    const { product, currentImage } = this.state;
    return (
      <div style={{ paddingTop: '5%' }}>
        <Col md={1}>
          {this.handleOneImage(product)}
        </Col>
        <Col md={4}>
          <ReactImageMagnifyTouch {...{
              largeImage: {
                src: require(`../assets/products/${product.productCode}/${currentImage}.jpg`),
                width: 1200,
                height: 1200,
              },
              smallImage: {
                src: require(`../assets/products/${product.productCode}/${currentImage}-600x600.jpg`),
                isFluidWidth: true,
              }
          }} />
        </Col>
        <Col md={5} style={{
          textAlign: 'center',
          verticalAlign: 'middle',
          textTransform: 'uppercase',
          letterSpacing: '5px',
        }}>
          <h5>{product.category}</h5>
          <h5>{product.type}</h5>
          <h2>{product.name}</h2>
          <h5>Ref. {product.productCode}</h5>
          <h5>{product.price}</h5>
        </Col>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  jewelleries: state.jewelleries,
});

export default connect(mapStateToProps)(ProductPage);
