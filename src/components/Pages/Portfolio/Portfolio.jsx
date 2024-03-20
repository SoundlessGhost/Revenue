import { Helmet } from "react-helmet";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div id="PortfolioMainContainer" className="py-32 Website_Name ">
      <Helmet>
        <title>Portfolio || The world of revenue</title>
      </Helmet>
      <Parallax
        bgImage="https://images.unsplash.com/photo-1519095657781-b206d4b7aad3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHVucGxhc2h8ZW58MHx8MHx8fDA%3D"
        strength={200}
      >
        <div id="PortfolioManagement" className="py-[250px] text-center text-white">
          <h3 className="text-4xl">Portfolio Management</h3>
        </div>
      </Parallax>

      <div id="PortfolioContainer" className="grid grid-cols-[9fr,3fr] m-20">
        <div>
          <p className="pr-20">
            Dolor sit amet consectetur adipisicing elit. Aperiam, dolor
            distinctio enim cupiditate rerum fugit nam excepturi voluptates!
            <span>Consectetur</span> sed beatae tenetur nulla voluptatibus harum
            unde dolores tempora. <span>dolor sit amet</span> consectetur elit.
            Aperiam, dolor distinctio enim cupiditate rerum fugit nam excepturi
            voluptates! Consectetur sed beatae tenetur nulla voluptatibus harum
            unde dolores tempora minima suscipit.
          </p>
          <p id="PortfolioExtraText" className="pr-20 pt-10">
            Dolor sit amet consectetur adipisicing elit. Aperiam, dolor
            distinctio enim cupiditate rerum fugit nam excepturi voluptates!
            <span>Consectetur</span> sed beatae tenetur nulla voluptatibus harum
            unde dolores tempora. <span>dolor sit amet</span> consectetur elit.
            Aperiam, dolor distinctio enim cupiditate rerum fugit nam excepturi
            voluptates! Consectetur sed beatae tenetur nulla voluptatibus harum
            unde dolores tempora minima suscipit.
          </p>
        </div>

        <div>
          <div id="PortfolioDetails" className="mb-6">
            <p className="text-gray-500 text-[13px]">LOCATION</p>
            <h1>Dhaka, Bangladesh</h1>
          </div>
          <div id="PortfolioDetails" className="mb-6">
            <p className="text-gray-500 text-[13px]">DATE</p>
            <h1>3 October 2023</h1>
          </div>
          <div id="PortfolioDetails" className="mb-6">
            <p className="text-gray-500 text-[13px]">SHARE</p>
            <div className=" flex items-center mt-2">
              <Link
                target="blank"
                to="https://www.facebook.com/shahed.abiddarpon"
              >
                <img
                  className="w-8 mr-4 rounded-full border-gray-400 cursor-pointer border p-2"
                  src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                  alt=""
                />
              </Link>
              <Link target="blank" to="https://github.com/SoundlessGhost">
                <img
                  className="w-8 mr-4 rounded-full border-gray-400 cursor-pointer border p-2"
                  src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                  alt=""
                />
              </Link>
              <Link target="blank" to="https://www.linkedin.com/in/shahed2247/">
                <img
                  className="w-8 mr-4 rounded-full border-gray-400 cursor-pointer border p-2"
                  src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div id="PortfolioImgContainer" className="grid grid-cols-3 mx-28 gap-8 ">
        <img
          className="w-[400px] imgHover rounded-md h-[350px]"
          src="https://images.unsplash.com/photo-1523302270222-0f256786563c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBhY2tldHxlbnwwfHwwfHx8MA%3D%3D"
        />
        <img
          className="w-[400px] imgHover rounded-md h-[350px]"
          src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGFja2V0fGVufDB8fDB8fHww"
        />
        <img
          className="w-[400px] imgHover rounded-md h-[350px]"
          src="https://images.unsplash.com/photo-1592914637125-28479601c75a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZyYWdyYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
        />
        <img
          className="w-[400px] imgHover rounded-md h-[350px]"
          src="https://images.unsplash.com/photo-1517268360635-01df33413763?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNyZWFtJTIwYm90dGxlfGVufDB8fDB8fHww"
        />
        <img
          className="w-[400px] imgHover rounded-md h-[350px]"
          src="https://images.unsplash.com/photo-1698545038651-df449ee3f282?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNyZWFtJTIwYm90dGxlfGVufDB8fDB8fHww"
        />
        <img
          className="w-[400px] imgHover rounded-md h-[350px]"
          src="https://images.unsplash.com/photo-1597070912765-4be70db51d95?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBhY2tldHxlbnwwfHwwfHx8MA%3D%3D"
        />
      </div>
    </div>
  );
};

export default Portfolio;
