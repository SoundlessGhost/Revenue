/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Helmet } from "react-helmet";
const Blogs = () => {
  // pagination
  const loadedProduct = useLoaderData();
  const [blogsPagination, setBlogsPagination] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(2);
  useEffect(() => {
    fetch(
      `https://revenue-server.vercel.app/blogsPagination?page=${currentPage}&limit=${itemPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setBlogsPagination(data));
  }, [currentPage, itemPerPage]);
  const totalPage = Math.ceil(loadedProduct.length / itemPerPage);
  const pagesNumber = [...Array(totalPage).keys()];

  const handleFindOutMoreClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <>
    <Helmet>
      <title>Blogs || Revenue</title>
    </Helmet>
      <div className="pt-32 pb-20 Website_Name text-center bg-slate-50">
        <div>
          <small>
            <Link to="/">HOME</Link> / <Link to="/blogs">BLOG</Link>
          </small>
        </div>
      </div>

      <div className="Website_Name  bg-slate-50">
        {blogsPagination.map((blog) => (
          <div key={blog._id} id="blogPadding" className="pb-28">
            <img className="w-[1100px] container" src={blog.img} alt="" />
            <div id="BlogsContainer" className="w-[1100px] container">
              <p className="text-gray-400 mt-6">
                <small>{blog.date}</small>
              </p>
              <h1 className="text-4xl my-4">{blog.name}</h1>
              <h5>{blog.description}</h5>
              <Link to={`/blogs/${blog._id}`}>
                <button  onClick={handleFindOutMoreClick} className="mt-6 flex items-center FindMore">
                  <small>FIND OUT MORE</small>
                  <img
                    className="w-10 -ml-4 "
                    src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                    alt=""
                  />
                </button>
              </Link>
            </div>
          </div>
        ))}

        <div className="flex items-center  justify-center pb-20">
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
    </>
  );
};

export default Blogs;
