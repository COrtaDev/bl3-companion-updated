import React from "react";
import { loot } from "../../../services/loot";

const Items = ({ items }) => {
  if (items) {
    return <>{}</>;
  } else {
    return (
      <>
        {loot.map((item) => (
          <option value={item.name}>{item.name}</option>
        ))}
      </>
    );
  }
};
export default Items;
