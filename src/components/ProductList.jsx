/* eslint-disable react/prop-types */
import ProductCard from './ProductCard'

function ProductList({ products, onRemove }) {
  return (
    <div>
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onRemove={onRemove}
        />
      ))}
    </div>
  )
}

export default ProductList;
