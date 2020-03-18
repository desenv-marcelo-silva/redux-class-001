import React, { Component }  from 'react';
import { connect } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map( product => (
      {
        ...product,
        priceFormatted: formatPrice(product.price),
      }
    ))
    this.setState({ products: data });
  } 

  handleAddProduct = product => {
      //dispatch veio por conta do connect no export
      const { dispatch } = this.props;

      dispatch({
        type: 'ADD_TO_CART',
        product,
      })
  }

  render() {
    const { products } = this.state;

    return (<ProductList>
      { products.map( product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title}/>
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>
            <button type="button" onClick={() => this.handleAddProduct(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </button>
            </li>
      ))}
    </ProductList>);    
  }
}

//connect faz a ligação do component com a store do redux
// aceita uma função dentro do connect
export default connect()(Home);