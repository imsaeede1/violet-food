import styles from "./navbar.module.css";
import "../../fonts/B-NAZANIN.TTF";
import "../../fonts/BYekan.eot";
import "../../fonts/BYekan.ttf";
import "../../fonts/BYekan.woff";
import "../../fonts/IRANSANSExpanded.eot";
import "../../fonts/IRANSANSExpanded.woff2";
import "../../fonts/IRANSANSExpanded.woff";
import { useProduct } from "../provider/ReduceProvider";
const Navbar = ({ totalProducts }) => {
  const products = useProduct();
  totalProducts = products.filter((p) => p.quantity > 0).length;
  return (
    <div className={styles.nav}>
      <div>
        <h3 className={styles.textTitle}>ویولت فود</h3>
      </div>
      <div className={styles.flexProducts}>
        <h5 className={styles.navText}> {totalProducts} : </h5>
        <h5 className={styles.navTitle}>تعداد محصولات </h5>
      </div>
    </div>
  );
};

export default Navbar;
