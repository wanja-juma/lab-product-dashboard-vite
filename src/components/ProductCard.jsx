/* eslint-disable react/prop-types */
function ProductCard({ product, onRemove }) {
  return (
    <div
      className={product.inStock ? "card" : "card outOfStockClass"}
    >
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>

      <p>
        {product.inStock ? "In Stock " : "Out of Stock "}
      </p>

      <button onClick={() => onRemove(product.id)}>
        Remove
      </button>
    </div>
  );
}

export default ProductCard;
