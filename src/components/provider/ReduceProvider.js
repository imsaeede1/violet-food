import { createContext } from "react";
import { useContext, useReducer } from "react";

const ProductContext = createContext();
const ProductContextDispatcher = createContext();

const initialState = [
  {
    title: "پیتزا میلانو",
    description: "سس گوجه دست ساز، فیله مرغ، فلفل دلمه، زیتون، پنیر ترکیبی",
    price: 89000,
    id: 1,
    quantity: 1,
    img: "../../../images/pitza.png",
  },
  {
    title: "دونر گوشت",
    description:
      "کاهو رومانا، گوجه چری، نان کروتان، ریحان، فیله گریل، پنیر پارمژان، سس سزار",
    price: 76000,
    id: 2,
    quantity: 2,
    img: "../../../images/doner.png",
  },
  {
    title: "سالاد سزار",
    description:
      "کاهو رومانا، گوجه چری، نان کروتان، ریحان، فیله گریل، پنیر پارمژان، سس سزار",
    price: 89000,
    id: 3,
    quantity: 6,
    img: "../../../images/sezar.png",
  },
  {
    title: "وگاس فرایز",
    description:
      "سیب زمینی کریسپی، بیکن، سس پیازچه، گوجه خشک طعم دار، جعفری، ادویه",
    price: 69000,
    id: 4,
    quantity: 3,
    img: "../../../images/friz.png",
  },
  {
    title: "پیتزا میلانو",
    description: "سس گوجه دست ساز، فیله مرغ، فلفل دلمه، زیتون، پنیر ترکیبی",
    price: 99000,
    id: 5,
    quantity: 1,
    img: "../../../images/pitza-steak.png",
  },
  {
    title: "هات داگ کلاسیک",
    description:
      "کاهو رومانا، گوجه چری، نان کروتان، ریحان، فیله گریل، پنیر پارمژان، سس سزار",
    price: 78000,
    id: 6,
    quantity: 2,
    img: "../../../images/classic-hotdog.png",
  },
  {
    title: "سالاد سزار",
    description:
      "کاهو رومانا، گوجه چری، نان کروتان، ریحان، فیله گریل، پنیر پارمژان، سس سزار",
    price: 89000,
    id: 7,
    quantity: 4,
    img: "../../../images/sezar.png",
  },
  {
    title: "وگاس فرایز",
    description:
      "سیب زمینی کریسپی، بیکن، سس پیازچه، گوجه خشک طعم دار، جعفری، ادویه",
    price: 69000,
    id: 8,
    quantity: 3,
    img: "../../../images/friz.png",
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "incrementHandler": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }

    case "decrementHandler": {
      const index = state.findIndex((p) => p.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filterProduct = state.filter((p) => p.id !== action.id);
        return filterProduct;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }

    case "deleteHandler": {
      const filterProduct = state.filter((p) => p.id !== action.id);
      return filterProduct;
    }

    case "search": {
      if (action.event.target.value === "") {
        return initialState;
      } else {
        const updatedProducts = initialState.filter((p) =>
          p.title
            .toLowerCase()
            .includes(action.event.target.value.toLowerCase())
        );
        return updatedProducts;
      }
    }

    default:
      return state;
  }
};

const ReduceProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <ProductContext.Provider value={products}>
        <ProductContextDispatcher.Provider value={dispatch}>
          {children}
        </ProductContextDispatcher.Provider>
      </ProductContext.Provider>
    </div>
  );
};

export default ReduceProvider;

export const useProduct = () => useContext(ProductContext);
export const useProductAction = () => useContext(ProductContextDispatcher);
