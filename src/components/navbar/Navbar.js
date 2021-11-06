import styles from "./navbar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
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
      <div className={styles.flexProducts}>
        <div className={styles.navText}> {totalProducts} </div>
        <h5 className={styles.navTitle}>: انواع فست فود ها </h5>
      </div>
      <div>
        <h3 className={styles.textTitle}>ویولت فود</h3>
      </div>

      <input
        type="text"
        placeholder="جستوجو در ویولت فود"
        className={styles.btnStyle}
      />
    </div>
  );
};

export default Navbar;
