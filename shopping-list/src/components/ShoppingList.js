import React from "react";
import ShoppingItem from "./ShoppingItem";

function ShoppingList({ items, setItems }) {
  const handleToggleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="shopping-list">
      <h2>Alışveriş Listesi</h2>
      <ul>
        {items.map((item) => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
