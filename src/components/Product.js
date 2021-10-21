import React, { useState } from "react";

import "./Product.css";

function Product({ item: { name, desc, price, url } }) {
  const [newName, setNewName] = useState(name);
  const [newDesc, setNewDesc] = useState(desc);
  const [newPrice, setNewPrice] = useState(price);
  const [tempName, setTempName] = useState("");
  const [tempDesc, setTempDesc] = useState("");
  const [tempPrice, setTempPrice] = useState(0);
  const [showEditPanel, setShowEditPanel] = useState(false);

  const handleClickEdit = () => {
    setShowEditPanel(true);
  };

  const saveChange = () => {
    setNewName(tempName || newName);
    setTempName("");
    setNewDesc(tempDesc || newDesc);
    setTempDesc("");
    setNewPrice(tempPrice || newPrice);
    setTempPrice(0);
    setShowEditPanel(false);
    // from here we can send put request to backend to update data
  };

  return (
    <div className="product__container">
      {showEditPanel ? (
        <div className="editor__container">
          <div className="product__editor">
            <div className="editor__input">
              <label>New Product Name:</label>
              <input
                type="text"
                onChange={(e) => setTempName(e.target.value)}
                defaultValue={newName}
              />
            </div>
            <div className="editor__input">
              <label>New Product Description:</label>
              <input
                type="text"
                onChange={(e) => setTempDesc(e.target.value)}
                defaultValue={newDesc}
              />
            </div>
            <div className="editor__input">
              <label>New Product Price:</label>
              <input
                type="number"
                onChange={(e) => setTempPrice(e.target.value)}
                defaultValue={newPrice}
              />
            </div>
            <div className="editor__button">
              <button onClick={saveChange}>Save</button>
              <button onClick={() => setShowEditPanel(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : null}
      <img src={url} alt={name} />
      <div className="product__infoContainer">
        <div className="product">
          <p className="product__name">{newName}</p>
          <p className="product__desc">{newDesc}</p>
          <p className="product__price">
            {"$"}
            {newPrice}
          </p>
        </div>
        <div className="product__buttonContainer">
          <button onClick={(e) => handleClickEdit()}>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
