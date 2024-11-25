import { useDispatch, useSelector } from "react-redux";
import SubResIteamCatg from "./SubResIteamCatg";
import { removeIteam } from "../utils/cardSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItem = useSelector((store) => store.carts.iteams);
  //   console.log(cartItem);

  const dispatch = useDispatch();
  const hadleClick = () => {
    dispatch(removeIteam());
  };
  return (
    <div className=" mt-3 sub-page">
      <div className=" p-5 bg-primary text-white text-center mb-5">
        <h1>Cart</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <div className="text-center mb-5">
        <button className="btn  btn-primary" type="button" onClick={hadleClick}>
          Clear
        </button>
      </div>
      <div className="container ">
        {cartItem.length ? (
          <SubResIteamCatg data={cartItem} />
        ) : (
          <h3 className="mt-3 text-center">
            Go to page
            <Link className="nav-link" to="/">
              Home
            </Link>
          </h3>
        )}
      </div>
    </div>
  );
};

export default Cart;
