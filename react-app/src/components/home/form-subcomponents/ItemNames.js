import React from "react";
import { loot } from "../../../services/loot";

const Items = ({ items, select }) => {
  if (items) {
    return (
      <>
        {loot
          .filter((item) => {
            return item.name.toLowerCase().startsWith(items.toLowerCase());
          })
          .map((item) => (
            <option key={item.id} value={item.name} onClick={select}>
              {item.name}
            </option>
          ))}
      </>
    );
  } else {
    return (
      <>
        {loot.map((item) => (
          <option key={item.id} value={item.name} onClick={select}>
            {item.name}
          </option>
        ))}
      </>
    );
  }
};
export default Items;
