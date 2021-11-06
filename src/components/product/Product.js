import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { AiOutlineMinusCircle } from "react-icons/ai";
import "../../fonts/BYekan.eot";
import "../../fonts/BYekan.ttf";
import "../../fonts/BYekan.woff";
import "../../fonts/B-NAZANIN.TTF";
import "../../fonts/Shabnam.ttf";
import "../../fonts/IRANSans-Bold.eot";
import "../../fonts/IRANSans-Bold.woff2";
import "../../fonts/IRANSans-Bold.woff";
import "../../fonts/IRANSANSExpanded.eot";
import "../../fonts/IRANSANSExpanded.woff2";
import "../../fonts/IRANSANSExpanded.woff";

const Product = ({ product, onDelete, onIncrement, onDecrease }) => {
  return (
    <div className={styles.container} id="title">
      <img alt="menu" src={product.img} className={styles.containerImg} />
      <div className={styles.flexMain}>
        <div className={styles.flexTitle}>
          <div>
            <p className={styles.flexTitle}>{product.title}</p>
            <p className={styles.textDescription}>{product.description}</p>
          </div>
          <div className={styles.btnDelete} onClick={onDelete}>
            <BiTrash />
          </div>
        </div>

        <div className={styles.flexprice}>
          <div className={styles.textprice}>
            <p className={styles.pric}>{product.price}</p>
            <span className={styles.priceText}> تومان </span>
          </div>

          <div className={styles.flexBtn}>
            <div
              className={`${styles.btn} ${styles.inc}`}
              onClick={onIncrement}
            >
              <AiFillPlusCircle />
            </div>
            <span className={styles.quant}>{product.quantity}</span>
            <div
              className={`${styles.btn} ${
                product.quantity === 1 && styles.remove
              }`}
              onClick={onDecrease}
            >
              {product.quantity > 1 ? <AiOutlineMinusCircle /> : <BiTrash />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

//<input className={styles.btn} onChange={onChange} value={product.title} />
