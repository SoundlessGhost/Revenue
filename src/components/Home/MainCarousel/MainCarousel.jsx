/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const MainCarousel = () => {
  return (
    <div className="h-[400px] w-[600px] pt-10 py-4 ml-10">
      <div className="swiperStyle">
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="WhatSaying">
              <p>You Ignore</p>
              <p className="text-orange-600">I Wait</p>
            </div>
            <p className=" italic mt-6">
              Clouds Come Floating Into My Life, No Longer To Carry Rain Or
              Usher Storm, But To Add Color To My Sunset Sky .You Can't Cross
              The Sea Merely By Standing And Staring At The Water.
            </p>
            <button className="mt-6  flex items-center FindMoreX">
              <Link to="/service">
                <small className="bg-slate-200 px-4 py-2">FIND OUT MORE</small>
              </Link>
              <img
                className="w-10 -ml-6"
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt=""
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhatSaying">
              <p>We Bring</p>
              <p className="text-orange-600">Customers</p>
            </div>
            <p className="italic mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.quam
              deserunt doloribus veniam consequuntur quaerat id. Minima aperiam
              quas animi sed at amet. Iure, minus. eius consectetur saepe.
            </p>
            <button className="mt-6  flex items-center FindMoreX">
              <Link to="/service">
                <small className="bg-slate-200 px-4 py-2">FIND OUT MORE</small>
              </Link>
              <img
                className="w-10 -ml-6"
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt=""
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhatSaying">
              <p>Grow Your</p>
              <p className=" text-orange-600">Business</p>
            </div>
            <p className="italic mt-6">
              Love Is Not Only Made For Lovers, It Is Also For Friends Who Love
              Each Other Better Than Lovers. Some People Are Part Of The Story,
              But Not Part Of The Ending .
            </p>
            <button className="mt-6  flex items-center FindMoreX">
              <Link to="/service">
                <small className="bg-slate-200 px-4 py-2">FIND OUT MORE</small>
              </Link>
              <img
                className="w-10 -ml-6"
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt=""
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhatSaying">
              <p>Girls Never</p>
              <p className=" text-orange-600">Realize</p>
            </div>
            <p className=" italic mt-6">
              The Sanskrit Language, Whatever Be Its Antiquity Is Of Wonderful
              Structure, More Perfect Than The Greek, More Copious Than The
              Latin And More Exquisitely Refined Than Either.
            </p>
            <button className="mt-6  flex items-center FindMoreX">
              <Link to="/service">
                <small className="bg-slate-200 px-4 py-2">FIND OUT MORE</small>
              </Link>
              <img
                className="w-10 -ml-6"
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt=""
              />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div className="WhatSaying">
              <p>We Build</p>
              <p className=" text-orange-600">Relations</p>
            </div>
            <p className=" italic mt-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo nisi
              quae eos et natus, asperiores magni expedita. Distinctio, enim
              officia eveniet expedita dolore quo eius consectetur saepe,
              dolorem adipisci ipsa.
            </p>
            <button className="mt-6  flex items-center FindMoreX">
              <Link to="/service">
                <small className="bg-slate-200 px-4 py-2">FIND OUT MORE</small>
              </Link>
              <img
                className="w-10 -ml-6"
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt=""
              />
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MainCarousel;
