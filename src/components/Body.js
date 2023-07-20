import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import arrData from "../utils/mockData";

const Body = () => {
  let [listData, setListData] = useState(arrData);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData = listData.filter((ele) => {
              return ele.rating > 4;
            });
            setListData(filteredData);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listData.map((resto, index) => (
          <RestaurantCard res={resto} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
