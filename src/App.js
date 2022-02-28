import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Items/Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from "./redux/store";
import { actionFetchApi } from "./redux/actions/actionFetchApi";

function App() {
  // const [product, setProduct] = useState();
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [cd, setCd] = useState([]);

  const product = useSelector((state) => state.product.products);
  // console.log(products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchApi());
  }, []);

  // const getData = () => {
  //   return fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       return data;
  //     });
  // };

  // useEffect(() => {
  //   async function fetchData() {
  //     setLoader(true);
  //     let response = await getData();
  //     setLoader(false);
  //     setProduct(response.data.product);
  //   }
  //   fetchData();
  // }, []);

  const handleAddToCart = () => {
    return setCount(count + 1);
  };

  return (
    // <Provider store={store}>
      <div className="App">
        <Navbar
          count={count}
          cd={cd}
          setCd={setCd}
          handleAddToCart={handleAddToCart}
          setCount={setCount}
        />
        <Cart
          // product={product}
          handleAddToCart={handleAddToCart}
          count={count}
          loader={loader}
          cd={cd}
          setCd={setCd}
        />
      </div>
    // </Provider>
  );
}

export default App;
