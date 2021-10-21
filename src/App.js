import "./App.css";

import Product from "./components/Product";
import { products } from "./json/index.json";

function App() {
  return (
    <div className="App">
      {products.map((item, idx) => (
        <Product item={item} key={idx} />
      ))}
    </div>
  );
}

export default App;
