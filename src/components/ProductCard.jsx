/* eslint-disable react/prop-types */
import styles from '../styles/ProductCard.module.css'

function ProductCard({ product, onRemove }) {
  const isOutOfStock = !product.inStock

  return (
    <div
      className={`card ${isOutOfStock ? "outOfStockClass" : ""}`}
      data-testid={`product-${product.id}`}
    >
      <h3>
        {product.name}
      </h3>

      <p>{product.price}</p>

      {isOutOfStock && (
        <span className={styles.badge}>
          Out of Stock
        </span>
      )}

      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  )
}

export default ProductCard;