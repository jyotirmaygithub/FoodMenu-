import React from "react";

export default function showingmenu(props) {
    function capital(title){
        return title[0].toUpperCase() + title.slice(1)
    }

  let { id, title, category, price, img, desc } = props;
  return (
    <div className="container universal my-4" id={id}>
      <div className="image-box">
        <img className="card-img-top for-image" src={img} alt={title} />
      </div>
      <div className="card-body card-box">
        <div className="universal dotted-line">
        <h5>{capital(title)}</h5>
        <h6 className="card-title update-price">{price} $ </h6>
        </div>
        <p className="card-text">
        {desc}
        </p>
      </div>
    </div>
  );
}
