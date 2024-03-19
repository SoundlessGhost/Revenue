import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ItemReactTab from "../ItemReactTab";
import useProduct from "../../../../Hooks/useProduct";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const ProductView = () => {
  const { id } = useParams();
  const [product] = useProduct();
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  // Load Data
  const [pdt, setProduct] = useState([]);
  useEffect(() => {
    fetch(`https://revenue-server.vercel.app/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  
  const {
    _id,
    img,
    additionalImages,
    size,
    weight,
    color,
    name,
    price,
    quantity,
    rating,
  } = pdt;

  const productInformation = {
    name,
    img,
    price,
    size,
    color,
  };

  // Product Mouse Hover
  const handleMouseEnter = (productId) => {
    const image = document.getElementById(`image-${productId}`);
    if (image) {
      image.classList.add("zoomed");
    }
  };

  const handleMouseLeave = (productId) => {
    const image = document.getElementById(`image-${productId}`);
    if (image) {
      image.classList.remove("zoomed");
    }
  };

  // Handle Add To Cart
  const handleAddToCart = () => {
    const orderInfo = {
      productId: _id,
      productInformation,
      email: user?.email,
    };
    if (user && user.email) {
      fetch("https://revenue-server.vercel.app/carts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(orderInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("product add successfully");
          }
        });
    } else {
      navigate("/login", { state: { from: location } });
      toast("please login order to product");
    }
  };

  return (
    <div className="mt-36 mr-20 ml-40 Website_Name">
       <Helmet>
        <title>View Product || The world of revenue</title>
      </Helmet>
      <div className="flex">
        <div>
          <div>
            <img
              className="rounded-md mr-10 h-[400px] w-[600px]"
              src={additionalImages}
              alt=""
            />
          </div>
          <div className=" flex mt-4 mb-10">
            <img
              className=" h-[140px] w-[280px] mr-10 rounded-md"
              src={img}
              alt=""
            />
            <img
              className=" h-[140px] w-[280px] rounded-md"
              src={additionalImages}
              alt=""
            />
          </div>
          <ItemReactTab
            weight={weight}
            sizes={size}
            colors={color}
          ></ItemReactTab>
        </div>

        <div className="w-[400px] ">
          <h2 className="text-5xl mb-3">{name}</h2>

          <p className="mb-3 text-2xl text-red-500">${price}</p>

          <p className="mb-3">
            <span>Available: </span>
            {quantity} Piece
          </p>

          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            delectus laboriosam esse! Magni quo unde vel, ea quidem nesciunt
            libero, iste voluptatum rerum, tempora aut illo. Et possimus
            architecto ab assumenda atque dolorum cumque, nostrum quaerat,
            tempora porro nam adipisci.
          </p>

          <p className="mb-3">
            <span>Rating:</span> {rating}
          </p>

          <p className="mb-3">
            <span>Color:</span> {color}
          </p>
          <button
            onClick={handleAddToCart}
            className="mt-6  flex items-center FindMoreX"
          >
            <small className="bg-orange-500 rounded-sm text-white p-4">
              ADD TO CART
            </small>
            <img
              className="w-10 -ml-6"
              src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <div className="mb-20">
        <h1 className="text-3xl my-10 text-blue-800">Related Product</h1>
        <div className="flex items-center justify-between">
          {product.slice(18, 22).map((item) => (
            <div
              key={item._id}
              className="image-container relative"
              onMouseEnter={() => handleMouseEnter(item._id)}
              onMouseLeave={() => handleMouseLeave(item._id)}
            >
              <Link to={`/product/${item._id}`}>
                <img
                  className="h-[200px] w-[250px] mb-4 rounded-lg"
                  src={item.img}
                  alt=""
                />
              </Link>
              <div className="">
                <p className="text-3xl">{item.name}</p>
                <p className="">${item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductView;
