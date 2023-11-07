import React, { useEffect, useState } from 'react';
import styles from './Loja.module.css';
import ItemCard from '../itens/ItemCard';

function Loja() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const response = await fetch('http://localhost:8080/produtos');
        if (!response.ok) {
          throw new Error('Erro ao buscar produtos');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProdutos();
  }, []);

  return (
    <div className={styles['loja']}>
      <h1>Produtos Disponíveis</h1>
      <div className="row">
        {produtos.map((produto, index) => (
          <ItemCard key={index} product={produto} />
        ))}
      </div>
    </div>
  );
}

export default Loja;
