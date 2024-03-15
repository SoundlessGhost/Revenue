import { Helmet } from "react-helmet";
import useAuth from "./components/Hooks/useAuth";
import useCart from "./components/Hooks/useCart";

const Checkout = () => {
  const { user } = useAuth();
  const [cart] = useCart();

  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item?.productInformation?.price),
    0
  );
  return (
    <div className="mt-32 mx-28 Website_Name flex justify-between">
      <Helmet>
        <title>Checkout || Revenue</title>
      </Helmet>

      <div>
        <h1 className="text-4xl mb-4">Bill details</h1>
        <form>
          <label className="">
            <p className="mb-2">Name:</p>
            <input
              className="border mb-6 p-2 rounded-md border-gray-300 w-[500px]"
              type="text"
              placeholder="name"
            />
          </label>

          <label className="">
            <p className="mb-2">Email:</p>
            <input
              className="border mb-6 p-2 rounded-md border-gray-300 w-[500px]"
              type="email"
              placeholder="email"
            />
          </label>

          <label className="">
            <p className="mb-2">Phone:</p>
            <input
              className="border mb-6 p-2 rounded-md border-gray-300 w-[500px]"
              type="text"
              placeholder="phone"
            />
          </label>

          <label className="">
            <p className="mb-2">Country:</p>
            <input
              className="border mb-6 p-2 rounded-md border-gray-300 w-[500px]"
              type="text"
              placeholder="country"
            />
          </label>

          <label className="">
            <p className="mb-2">Town / City:</p>
            <input
              className="border mb-6 p-2 rounded-md border-gray-300 w-[500px]"
              type="text"
              placeholder="town / city"
            />
          </label>
        </form>
      </div>

      <div>
        <h1 className="text-4xl mb-4">Your Order</h1>
        <div>
          {cart.map((item) => (
            <div
              key={item._id}
              className="border-0 mb-8  border-b border-green-600 flex justify-between"
            >
              <p>{item.productInformation.name}</p>

              <p>+ {item.productInformation.price}</p>
            </div>
          ))}
        </div>
        <div className="w-96">
          <div className="border-0 mb-8  border-b border-blue-600 flex justify-between">
            Total Item <p>{cart.length}</p>
          </div>
          <div className="border-0 mb-8  border-b border-blue-600 flex justify-between">
            Total Price = <p>$ {user && total.toFixed(1)}</p>
          </div>
          <button className="p-4 bg-blue-500 rounded-md text-white">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
