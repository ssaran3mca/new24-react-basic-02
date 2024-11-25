import { IMG_PRODUCT } from "../utils/contents";
import { Link } from "react-router-dom";
export const Restorent = (props) => {
  const { resdata } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, id } = resdata?.info;

  return (
    <div className=" col-sm-3 menu-swiggy">
      <div className="card  ">
        <Link to={"/res/" + id}>
          <div className="card-header">
            <img
              className="product-img"
              src={IMG_PRODUCT + cloudinaryImageId}
            />
          </div>
          <h5 className="card-body">{name}</h5>
          <div className="card-body">{cuisines.join(",  ")}</div>
          <p className="card-body"> Star Reating {avgRating}</p>
        </Link>
      </div>
    </div>
  );
};

export const withPromtedLable = (Restorent) => {
  return (props) => {
    const { aggregatedDiscountInfoV3 } = props.resdata.info || {};

    return (
      <div className="col-sm-3 menu-withpromtedlable">
        <label className="promoter">
          <span className="me-2">{aggregatedDiscountInfoV3.header}</span>
          {aggregatedDiscountInfoV3.subHeader}
        </label>
        {/* {console.log(props.resdata.info.aggregatedDiscountInfoV3)} */}

        <Restorent {...props} />
      </div>
    );
  };
};
export default Restorent;
