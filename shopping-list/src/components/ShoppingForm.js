import React, { useState } from "react";

function ShoppingForm({ items, setItems }) {
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemName || !quantity) return;

    const newItem = {
      id: Date.now(),
      name: itemName,
      quantity: quantity,
      completed: false,
    };

    setItems([...items, newItem]);

    setItemName("");
    setQuantity("");
  };

  console.log([items]);

  return (
    <div className="form-container">
      <div className="add-item">
        <form onSubmit={handleSubmit}>
          <h2>Ürün Ekle</h2>
          <div className="item">
            <h3>Ürün:</h3>
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
          </div>
          <div className="quantity">
            <h3>Miktar:</h3>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className="add-btn">Ekle</button>
        </form>
      </div>
    </div>
  );
}

export default ShoppingForm;
