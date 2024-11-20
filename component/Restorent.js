import { IMG_PRODUCT } from "../utils/contents";
import { Link } from "react-router-dom";
export const Restorent = (props) => {
  const { resdata } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, id } = resdata?.info;
  // console.log(resdata.info.avgRating);
  return (
    <div className=" col-sm-3 menu-swiggy mb-3">
      <div className="card ">
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
export default Restorent;
