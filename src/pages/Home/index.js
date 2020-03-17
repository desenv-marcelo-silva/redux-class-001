import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (<ProductList>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/06/COL-6983-006/COL-6983-006_zoom1.jpg?ts=1562251104&ims=326x" alt="Tênis Adidas"/>
      <strong>Tênis adidas legal</strong>
      <span>R$ 329,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF" /> 3
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/06/COL-6983-006/COL-6983-006_zoom1.jpg?ts=1562251104&ims=326x" alt="Tênis Adidas"/>
      <strong>Tênis adidas legal</strong>
      <span>R$ 329,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF" /> 3
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/06/COL-6983-006/COL-6983-006_zoom1.jpg?ts=1562251104&ims=326x" alt="Tênis Adidas"/>
      <strong>Tênis adidas legal Tênis adidas legal Tênis adidas legal Tênis adidas</strong>
      <span>R$ 329,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF" /> 3
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/06/COL-6983-006/COL-6983-006_zoom1.jpg?ts=1562251104&ims=326x" alt="Tênis Adidas"/>
      <strong>Tênis adidas legal</strong>
      <span>R$ 329,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF" /> 3
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/06/COL-6983-006/COL-6983-006_zoom1.jpg?ts=1562251104&ims=326x" alt="Tênis Adidas"/>
      <strong>Tênis adidas legal</strong>
      <span>R$ 329,90</span>
      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF" /> 3
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
    <li>
      <img src="https://static.netshoes.com.br/produtos/tenis-adidas-energy-falcon-masculino/06/COL-6983-006/COL-6983-006_zoom1.jpg?ts=1562251104&ims=326x" 
           alt="Tênis Adidas"/>
      <strong>Tênis adidas legal</strong>
      <span>R$ 329,90</span>

      <button type="button">
        <div>
          <MdAddShoppingCart size={16} color="#FFF" /> 3
        </div>

        <span>ADICIONAR AO CARRINHO</span>
      </button>
    </li>
  </ProductList>)
}