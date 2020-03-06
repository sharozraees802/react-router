import React, { useState, useEffect } from "react";
import "./App.css";

function Shop() {

//   useEffect(() => {
//       fetchItems();
//   }, []);

// const [items,setItems] = useState([]);

//   const fetchItems = async () => {
//     const data = await fetch(
//     //   "https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get"
//     "https://fortnite-api.theapinetwork.com/items/list"
//     );
//     const items = await data.json();
//     console.log(items.items);
//     setItems(items.items);
//   };

  return (
    <div>
      <h1>Shop Page</h1>
      {/* {items.map(item=>(
      <h1>{item.name}</h1>
      ))} */}
    </div>
  );
}

export default Shop;
