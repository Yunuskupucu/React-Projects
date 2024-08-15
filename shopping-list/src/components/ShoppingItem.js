import React from "react";
import { IoTrash } from "react-icons/io5";
function ShoppingItem({ item, onToggleComplete, onDelete }) {
  return (
    <div className="list-grid">
      <li className={`item ${item.completed ? "completed" : ""}`}>
        <span>
          {item.name} / {item.quantity}
        </span>
        <div className="check-delete-btn">
          <input type="checkbox" onClick={() => onToggleComplete(item.id)} />
          {/* <button onClick={() => onToggleComplete(item.id)}>
            {item.completed ? "Tamamlandı" : "Tamamla"}
          </button> */}
          <button className="delete-btn" onClick={() => onDelete(item.id)}>
            <IoTrash />
          </button>
        </div>
      </li>
    </div>
  );
}

export default ShoppingItem;
