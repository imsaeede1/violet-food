import styles from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/product/ProductList";
import ReduceProvider from "./components/provider/ReduceProvider";

const App = () => {
  return (
    <div className={styles.container}>
      <ReduceProvider>
        <Navbar />
        <ProductList />
      </ReduceProvider>
    </div>
  );
};

export default App;
