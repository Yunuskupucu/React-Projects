import { useState } from "react";
import "./App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <ShoppingForm setItems={setItems} items={items} />
      <ShoppingList setItems={setItems} items={items} />
    </div>
  );
}

export default App;
