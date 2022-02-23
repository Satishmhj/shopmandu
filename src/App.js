import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Items/Cart";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import CartDetail from "./components/CartDetail/CartDetail";

function App() {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(0);
  const [loader, setLoader] = useState(false);
  const [cd, setCd] = useState([]);
  const getData = () => {
    return fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    async function fetchData() {
      setLoader(true);
      let response = await getData();
      setLoader(false);
      // console.log(response);
      setProduct(response.data.product);
    }
    fetchData();
  }, []);

  const handleAddToCart = () => {
    return setCount(count + 1);
  };

  return (
    <div className="App">
      <Navbar
        count={count}
        cd={cd}
        setCd={setCd}
        handleAddToCart={handleAddToCart}
        setCount={setCount}
      />
      <Cart
        product={product}
        handleAddToCart={handleAddToCart}
        count={count}
        loader={loader}
        cd={cd}
        setCd={setCd}
      />
    </div>
  );
}

export default App;
