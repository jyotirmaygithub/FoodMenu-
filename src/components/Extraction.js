import React, { useState } from "react";
import Menudata from "./showingmenu";

export default function Extraction(props) {
  let { menudata } = props;
  const [Foodcategory, setFoodcategory] = useState(0); // Initialize as an zero

  function selection(value) {
    setFoodcategory(value);
  }

  return (
    <section>
      <div className="universal heading-box">
        <h1>Our Menu</h1>
      </div>
      <header>
        <nav>
          <ul className="universal addition">
            <li onClick={() => selection(0)}>All</li>
            <li onClick={() => selection('breakfast')}>Breakfast</li>
            <li onClick={() => selection('lunch')}>Lunch</li>
            <li onClick={() => selection('shakes')}>Shakes</li>
          </ul>
        </nav>
      </header>
      {menudata.map((e) => {
        let { id, title, category, price, img, desc } = e;
        //try to pay little bit more attention on the working of if statement
        if (Foodcategory === 0 || category === Foodcategory) {
          console.log(category);
          return (
            <Menudata
              id={id}
              key={id}
              title={title}
              category={category}
              price={price}
              img={img}
              desc={desc}
            />
          );
        }
      })}
    </section>
  );
}
