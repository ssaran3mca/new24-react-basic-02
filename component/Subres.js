import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { API_SUBRES } from "../utils/contents";
import { IMG_PRODUCT } from "../utils/contents";
import useRestorent from "../utils/useRestorent";
const Subres = () => {
  // const [resInfo, setResInfo] = useState(null);
  const resId = useParams();
  const resInfo = useRestorent(resId);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const data = await fetch(API_SUBRES + resId.resId);
  //   const json = await data.json();
  //   setResInfo(json.data);
  // };
  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const { card } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card || {};
  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className=" ">
      <div className=" bg-primary">
        <div className="container p-5 text-white ">
          <h1>{name}</h1>
          <p>
            {cuisines.join(", ")} {costForTwoMessage}
          </p>
        </div>
      </div>
      <div className="container mt-5 sub-page" key={id}>
        <h3 className="text-center my-4 pb-4">{card.title}</h3>
        {card.itemCards.map((items) => (
          <div className="">
            <div
              className=" pb-4 row justify-content-center  "
              key={items.card.info.id}
            >
              <div className="col-sm-6">
                <h6>
                  <b> {items.card.info.name}</b>
                </h6>
                <p>
                  <b>₹ {items.card.info.price / 100}</b>
                </p>
                <p>
                  <span className="fa fa-star me-2"></span>
                  {items.card.info.ratings.aggregatedRating.rating}
                </p>
                <p> {items.card.info.description}</p>
              </div>
              <div className="col-sm-2  ">
                <div className="sub-page-img-add">
                  <img
                    className="sub-page-image"
                    src={IMG_PRODUCT + items.card.info.imageId}
                  />
                  <div className="hNNDEj">
                    <div className="addbtn">
                      <p className="addbtn-in">Add </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Subres;
