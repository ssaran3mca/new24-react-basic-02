import { IMG_PRODUCT } from "../utils/contents";
const SubResIteamCatg = (data) => {
  return (
    <div>
      {data?.data?.itemCards?.map((items) => (
        <div className=" row justify-content-center  " key={items.card.info.id}>
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
      ))}
    </div>
  );
};
export default SubResIteamCatg;
