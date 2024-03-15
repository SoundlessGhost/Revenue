/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import useProduct from "../../../Hooks/useProduct";
import { useEffect, useState } from "react";

import { PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Product = () => {
  const [product] = useProduct();

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

  // pagination
  const loadedProduct = useLoaderData();
  const [pagination, setPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(6);
  useEffect(() => {
    fetch(
      `http://localhost:8000/pagination?page=${currentPage}&limit=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setPagination(data));
  }, [currentPage, itemPerPage]);
  const totalPage = Math.ceil(loadedProduct.length / itemPerPage);
  const pagesNumber = [...Array(totalPage).keys()];

  return (
    <div>
      <div className="mb-20 pb-20 pt-28 Website_Name text-center bg-slate-50">
        <div>
          <small>
            <Link to="/">HOME</Link> / <Link to="/cart">CART</Link>
          </small>
        </div>
      </div>

      <div className="grid grid-cols-[9fr,3fr]">
        <div className="grid grid-cols-3 pl-20">
          {pagination.map((item) => (
            <div key={item._id} className="productContainer">
              <Link to={`/product/${item._id}`}>
                <div
                  className="image-container relative"
                  onMouseEnter={() => handleMouseEnter(item._id)}
                  onMouseLeave={() => handleMouseLeave(item._id)}
                >
                  <img
                    id={`image-${item._id}`}
                    className="h-[320px] w-[250px] rounded-md"
                    src={item.img}
                    alt=""
                  />
                  <div className="overlay">
                    <button className="mt-6 FindMoreX">
                      <small className="bg-slate-200 p-4 font-serif">
                        READ MORE
                      </small>
                    </button>
                  </div>
                </div>
              </Link>
              <small className="ml-2 text-[10px] font-serif text-gray-400">
                PREMIUM QUALITY
              </small>
              <div className="flex justify-between mr-20 ml-2 items-center Website_Name mb-12">
                <p className="text-2xl">{item.name}</p>
                <p className="text-red-500">${item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="Website_Name pl-20 border-0 border-l-2 h-[600px] mt-4 border-pink-500">
          <h1 className="text-3xl my-4 -ml-8">Related Product</h1>
          <div className="">
            {product.slice(18, 22).map((item) => (
              <div key={item._id} className="flex items-center">
                <Link to={`/product/${item._id}`}>
                  <img
                    className="w-[80px] mb-4 rounded-md"
                    src={item.img}
                    alt=""
                  />
                </Link>
                <div className="ml-4 ">
                  <p className="text-1xl">{item.name}</p>
                  <p className="text-green-500">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center ml-80 mb-28 mt-10">
        <PaginationPrevious className="cursor-default"></PaginationPrevious>

        <div className="pagination">
          {pagesNumber.map((n) => (
            <button
              className="px-5  font-mono py-2 rounded-sm  hover:bg-slate-100"
              key={n}
              onClick={() => setCurrentPage(n)}
            >
              {n + 1}
            </button>
          ))}
        </div>
        <PaginationNext className="cursor-default"></PaginationNext>
      </div>
    </div>
  );
};

export default Product;
