import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const Cart = () => {
  const { user } = useAuth();
  const [cart, refetch] = useCart();

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item?.productInformation?.price),
    0
  );

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deleteCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
      }
    });
  };
  return (
    <>
      <Helmet>
        <title>Cart || The world of revenue</title>
      </Helmet>

      <div className="pt-32 pb-20 Website_Name text-center bg-slate-50">
        <div>
          <small>
            <Link to="/">HOME</Link> / <Link to="/product">PRODUCT</Link>
          </small>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="mx-20 Website_Name">
          <div className="p-4 border border-blue-500 bg-slate-100 rounded-md mb-6 flex items-center">
            <img
              className="w-8 mr-2"
              src="https://cdn-icons-png.flaticon.com/128/6598/6598519.png"
              alt=""
            />{" "}
            Your cart is currently empty .
          </div>
          <Link to="/product" className="p-4 bg-blue-500 rounded-md text-white">
            Return to Shop
          </Link>
        </div>
      ) : (
        <div>
          <div className="mx-20 mb-96 mt-10 Website_Name">
            <div className="flex items-center justify-evenly bg-slate-500 p-8 mb-4 mx-20 rounded-sm text-white font-semibold">
              <p className="absolute left-[620px]">Product</p>
              <p className="absolute left-[790px]">Color</p>
              <p className="absolute left-[950px]">Price</p>
            </div>

            <div>
              {cart.map((item, index) => (
                <div
                  key={item._id}
                  className="flex items-center hover:bg-slate-100 justify-evenly mb-4 mx-20"
                >
                  <p className="border px-2 rounded-full border-b-emerald-600 border-t-red-600 ">
                    {index + 1}
                  </p>
                  <img
                    className="w-16 rounded-sm h-16 "
                    src={item.productInformation.img}
                    alt=""
                  />
                  <p>{item.productInformation.name}</p>
                  <p>{item.productInformation.color}</p>
                  <p>{item.productInformation.price}</p>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="hover:bg-red-500 hover:text-white px-2 rounded-full py-[1px]"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>

            <div className="border border-gray-300 rounded-lg px-10 py-6 w-96 absolute right-20 mt-10">
              <h1 className="text-4xl mb-8">Cart Total</h1>
              <div className="border-0 mb-8  border-b border-emerald-600 flex justify-between">
                Total Item <p>{cart.length}</p>
              </div>
              <div className="border-0 mb-8  border-b border-emerald-600 flex justify-between">
                Total Price <p>$ {user && total.toFixed(1)}</p>
              </div>
              <Link to="/checkout" className="p-4 bg-blue-500 rounded-md text-white">
                Proceed Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
