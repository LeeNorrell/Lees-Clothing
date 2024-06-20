import React from "react";
import ClothingCard from "../components/ClothingCard";
import DropdownBar from "../components/DpropDownInfo/Dropdown";

const styles = {
  bit: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
};

const data = [{}];

export default function Clothes() {
  return (
    <div>
        <div>
            <DropdownBar />
        </div>
      <div style={styles.bit}>
        {data.map((data) => (
          <ClothingCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}
