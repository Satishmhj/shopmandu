import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from "./components/Items/Cart";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [product, setProduct] = useState();
  const getData = () => {
    return fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((response) => response.json())
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    async function fetchData() {
      let response = await getData();
      // console.log(response);
      setProduct(response.data.product)
    }
    fetchData();
  }, []);

  // console.log(product);
  return (
    <div className="App">
      <Navbar />
      <Cart product={product} />
    </div>
  );
}

export default App;
