import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestorent from "../utils/useRestorent";
import SubResIteam from "./SubResIteam";
import { useState } from "react";
const Subres = () => {
  const resId = useParams();
  const resInfo = useRestorent(resId);
  const { name, cuisines, costForTwoMessage, id } =
    resInfo?.cards?.[2]?.card?.card?.info || {};
  const catItemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ||
        c.card?.["card"]?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  const handleToggle = (index) => {
    setShowItema((prev) => (prev === index ? null : index)); // Toggle the state
  };
  const [showIteam, setShowItema] = useState(0);
  console.log(catItemCards);
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
      <div className="container mt-5 sub-page">
        {catItemCards.map(
          (resIteam, index) =>
            resIteam?.card?.card?.itemCards?.length && (
              <SubResIteam
                key={resIteam?.card?.card?.title}
                data={resIteam?.card?.card}
                showIteam={index == showIteam && true}
                setShowItema={() => handleToggle(index)}
              />
            )
        )}
      </div>
    </div>
  );
};
export default Subres;
