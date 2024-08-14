import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Yeni İşlem Ekleme</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Açıklama</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Açıklama Girin"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Miktar <br />
            (negatif - gider, pozitif - gelir)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Miktar Girin"
          />
        </div>
        <button className="btn">Ekle</button>
      </form>
    </>
  );
};
