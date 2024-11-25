import { useContext, useEffect, useState } from "react";
import resList from "../utils/mockData";
import Restorent, { withPromtedLable } from "./Restorent";
import Shimmer from "./Shimmer";
import { API_RES } from "../utils/contents";
import UserContext from "../utils/UserContext";
const Body = () => {
  const [listofRestorent, setListofRestorent] = useState([]);
  const [fliterlist, setfliterlist] = useState([]);

  // whenever state variables update, react trigger a reconciliation cycle (re ernder the component )

  const RestorentPromoted = withPromtedLable(Restorent);
  const [searchList, setSearchList] = useState("");
  const { setUserName, logInUser } = useContext(UserContext);
  useEffect(() => {
    fetchdata();
  }, []);
  const fetchdata = async () => {
    const data = await fetch(API_RES);
    const json = await data.json();

    setListofRestorent(
      // Optional Chaning
      json.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
    setfliterlist(
      json.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants || {}
    );
  };

  const [score, setscore] = useState();
  // conditional rendering
  // if (listofRestorent.length === 0) {
  //   return <Shimmer />;
  // }

  return (
    <div className="container mt-5">
      <form className="d-flex w-25 mb-5">
        <input
          className="form-control me-2"
          pe="text"
          placeholder="Search"
          value={searchList}
          onChange={(e) => {
            setSearchList(e.target.value);
          }}
        />
        <button
          className="btn btn-primary me-4"
          type="button"
          onClick={() => {
            const fliterofSearch = fliterlist.filter((res) =>
              res.info.name.toLowerCase().includes(searchList.toLowerCase())
            );
            setListofRestorent(fliterofSearch);
          }}
        >
          Search
        </button>
        <p></p>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => {
            if (!isNaN(searchList)) {
              const filterList = fliterlist.filter(
                (res) => res.info.avgRating >= searchList
              );
              if (filterList.length === 0) {
                console.log("No data");
              }
              // console.log(filterList);
              setListofRestorent(filterList);
            } else {
              console.log("type number ");
            }
          }}
        >
          Filter
        </button>
      </form>
      <div>
        <input
          className="form-control me-2"
          value={logInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <p> {logInUser}</p>
      </div>
      {listofRestorent.length === 0 ? (
        <Shimmer />
      ) : (
        <div>
          <div className="row">
            {listofRestorent?.map((restorent) =>
              restorent.info.aggregatedDiscountInfoV3 ? (
                <RestorentPromoted
                  key={restorent.info.id}
                  resdata={restorent}
                />
              ) : (
                <Restorent key={restorent.info.id} resdata={restorent} />
              )
            )}
            <div className="p-5 m-5">
              <input value={score} onChange={(e) => setscore(e.target.value)} />
              {score > 90 ? "A" : score > 75 ? "B" : "C"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
