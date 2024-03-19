/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const Service = () => {
  return (
    <div className="pt-32 Website_Name ">
      <Helmet>
        <title>Service || The world of revenue</title>
      </Helmet>
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage="https://images.unsplash.com/photo-1682687218147-9806132dc697?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
        strength={200}
      >
        <div id="parallaxContainer" className="py-[200px] text-center ">
          <p className="text-sm italic">WHAT WE OFFER</p>
          <h3 className="text-4xl w-[1200px] mx-24">
            Designed for the digital market. And We provide new identities,
            develop brands and launch websites for businesses
          </h3>
        </div>
      </Parallax>

      <div id="AvoidBusiness" className="flex justify-between m-20">
        <div>
          <img
            className="w-[600px] rounded-md"
            src=" https://plus.unsplash.com/premium_photo-1673014201877-64e88f4b5542?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </div>
        <div className="w-[600px]">
          <h1 className="text-5xl">Avoid bad products, make good products</h1>
          <div className="p-4 my-4">
            <li>Don't trust everything you see Even salt looks like sugar.</li>
            <li>
              It's very easy to find A New Product. But it's hard to find A Real
              one.
            </li>
          </div>
          <p>
            Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
            Nesciunt, <br />
            est illum necessitatibus assumenda corrupti maiores quasi saepe ut,
            nostrum, quis optio fugit modi? Debitis molestiae, ipsum aut
            voluptas quia dignissimos alias quam obcaecati eaque, placeat quod
            libero ullam? Natus, doloremque?
          </p>
          <Link to="/product" className="mt-6 flex items-center FindMore">
            <small className=" bg-amber-500 text-[16px] p-3 rounded-sm">
              See Product
            </small>
            <img
              className="w-10 -ml-4 "
              src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className="m-20">
        <div id="AnimationImgContainer" className="flex items-center justify-between">
          <div id="singleAnimationImgContainer">
            <img
              className="w-14"
              src="https://cdn-icons-gif.flaticon.com/7920/7920908.gif"
              alt=""
            />
            <h1 className="text-2xl my-2">SEO Consultancy</h1>
            <p>
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div id="singleAnimationImgContainer">
            <img
              className="w-14"
              src="https://cdn-icons-gif.flaticon.com/7743/7743137.gif"
              alt=""
            />
            <h1 className="text-2xl my-2">Development</h1>
            <p>
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div id="singleAnimationImgContainer">
            <img
              className="w-14"
              src="https://cdn-icons-gif.flaticon.com/8617/8617241.gif"
              alt=""
            />
            <h1 className="text-2xl my-2">Social Marketing</h1>
            <p>
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>

          <div id="singleAnimationImgContainer">
            <img
              className="w-14"
              src="https://cdn-icons-gif.flaticon.com/8485/8485606.gif"
              alt=""
            />
            <h1 className="text-2xl my-2">Web Design</h1>
            <p>
              Lorem, ipsum dolor sit amet <br /> consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>

      <div id="AvoidBusiness" className="flex justify-between m-20">
        <div className="w-[600px]">
          <h1 className="text-5xl">What we can do for your business</h1>
          <div className="p-4 my-4">
            <li>If you need anything or need help, you can knock.</li>
          </div>
          <p className="">
            Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit.
            Nesciunt, <br />
            est illum necessitatibus assumenda corrupti maiores quasi saepe ut,
            nostrum, quis optio fugit modi? Debitis molestiae, ipsum aut
            voluptas quia dignissimos alias quam obcaecati eaque, placeat quod
            libero ullam? Natus, doloremque?
          </p>
          <Link to="/contact" className="mt-6 flex items-center FindMore">
            <small className=" bg-amber-500 text-[16px] p-3 rounded-sm">
              Contact us
            </small>
            <img
              className="w-10 -ml-4 "
              src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
              alt=""
            />
          </Link>
        </div>
        <div>
          <img
            className="w-[600px] rounded-md"
            src=" https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
