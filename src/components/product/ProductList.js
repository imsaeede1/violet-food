import Product from "./Product";
import styles from "./product.module.css";
import { useProduct, useProductAction } from "../provider/ReduceProvider";

const ProductList = () => {
  const products = useProduct();
  const dispatch = useProductAction();

  const renderProduct = () => {
    return products.map((product) => {
      return (
        <Product
          key={product.id}
          product={product}
          onDelete={() => dispatch({ type: "deleteHandler", id: product.id })}
          onIncrement={() =>
            dispatch({ type: "incrementHandler", id: product.id })
          }
          onDecrease={() =>
            dispatch({ type: "decrementHandler", id: product.id })
          }
        />
      );
    });
  };

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerList}>
        {!products.length && <button>go back to shopping</button>}
        {renderProduct()}
      </div>
    </div>
  );
};

export default ProductList;
