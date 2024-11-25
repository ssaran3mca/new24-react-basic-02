import { useState } from "react";
import SubResIteamCatg from "./SubResIteamCatg";
const SubResIteam = ({ data, showIteam, setShowItema }) => {
  const handleClick = () => {
    setShowItema();
  };
  return (
    <div>
      <div className="container mt-5 sub-page">
        <div
          className=" row justify-content-center cursor-pointer"
          onClick={handleClick}
        >
          <div className="col-sm-7  ">
            <h5>
              {data.title} ({data?.itemCards?.length})
            </h5>
          </div>
          <div className="col-sm-1 arrow">
            <i className="fa fa-angle-up" aria-hidden="true"></i>
          </div>
        </div>
        {showIteam && (
          <SubResIteamCatg data={data?.itemCards} datas={data?.itemCards} />
        )}
      </div>
    </div>
  );
};
export default SubResIteam;
