import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import arrData from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listData, setListData] = useState([]);
  const [filteredResto, setFilteredResto] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setListData(arrData);
    setFilteredResto(arrData)
  }, []);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const promise = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );

  //   const data = await promise.json();

  // console.log(data.data.cards[0].card.card.imageGridCards.info[0].id);
  //   data.data.cards.map((el) => {(el.card.card.imageGridCards.info.map((ele) => console.log(ele)))})

  // };

  // conditional rendering
  //  if(listData.length === 0 ){
  //   return <Shimmer />
  //  }

  return listData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={
              // filter the restaurant cards and update the UI
              // search Text
              () => { 
                const filteredResto = listData.filter( 
                  (res) => res.name.toLowerCase().includes(searchText.toLowerCase())
                );
              
                setFilteredResto(filteredResto) 
              }
            }
          >
            Search
          </button>
        </div>
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
        {filteredResto.map((resto, index) => (
          <RestaurantCard res={resto} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Body;
