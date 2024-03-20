// import React from 'react';

import { Link } from "react-router-dom";
import Ceo from "../../../../assets/shahed.jpg";
import ceo from "../../../../assets/ceo.jpg";
import { AccordionDemo } from "./AccordionDemo";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="mt-20">
      <Helmet>
        <title>About || The world of revenue</title>
      </Helmet>
      <div
        id="TeamAboutContactContainer"
        className="flex justify-center py-20 Website_Name text-center bg-slate-50"
      >
        <div>
          <small>
            <Link to="/">HOME</Link> / <Link to="/team">ABOUT</Link>
          </small>
          <p className="text-4xl my-4">About </p>
          <p id="TeamAboutContactContainerText">
            We can help you develop and execute a clear and strategic <br /> IT
            roadmap with priorities that are closely linked to business goals.
          </p>
        </div>
      </div>

      <div id="WhoWeAreContainer" className="m-20 Website_Name flex">
        <div className="w-[800px]">
          <p>
            <small className="text-blue-500">Who We Are</small>
          </p>
          <h1 className="text-5xl my-6">
            We work to develop <br /> successful digital <br /> concepts and
            more
          </h1>
          <h2 className="text-3xl">Our Success</h2>
          <p className="my-4 w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quo obcaecati eum dolore tempora consequatur animi odio mollitia
            maiores itaque?
          </p>
          <h2 className="text-3xl">We Achieved</h2>
          <p className="my-4 w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quo obcaecati eum dolore tempora consequatur animi odio mollitia
            maiores itaque?
          </p>
        </div>

        <div id="aboutImg">
          <img
            className="w-[400px] h-[550px] rounded-lg imgHover"
            src="https://images.unsplash.com/photo-1549492423-400259a2e574?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="">
            <img
              className="w-[400px] rounded-lg absolute top-[580px] right-60 imgHover"
              src={ceo}
              alt=""
            />
          </div>
        </div>
      </div>

      <div id="OurAmazingTeamText" className=" mt-60 mb-32 mx-5">
        <h1 className="text-center text-4xl mb-20 font-semibold">
          Our Amazing Team
        </h1>
        <div id="OurAmazingTeam" className="flex justify-between">
          <div className=" shadow-lg rounded-lg">
            <img src={Ceo} className="h-[300px] w-[320px] rounded-lg" alt="" />
            <div className="text-center Website_Name mb-4 py-3 mt-2">
              <p className="text-[18px] font-semibold">Shahed Abid</p>
              <p className="text-gray-400 text-sm">
                <small>DESIGNER & DEVELOPER</small>
              </p>
            </div>
          </div>
          <div className=" shadow-lg rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c2luZXNzfGVufDB8fDB8fHww"
              className="h-[300px] w-[320px]  rounded-lg"
              alt=""
            />
            <div className="text-center Website_Name mb-4 py-3 mt-2">
              <p className="text-[18px] font-semibold">Abir Hosen</p>
              <p className="text-gray-400 text-sm">
                <small>DESIGNER & DEVELOPER</small>
              </p>
            </div>
          </div>
          <div className=" shadow-lg rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
              className="h-[300px] w-[320px]  rounded-lg"
              alt=""
            />
            <div className="text-center Website_Name mb-4 py-3 mt-2">
              <p className="text-[18px] font-semibold">Claudia Arla</p>
              <p className="text-gray-400 text-sm">
                <small>CEO</small>
              </p>
            </div>
          </div>
          <div className=" shadow-lg rounded-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1661265862059-dcfcd27304e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VvfGVufDB8fDB8fHww"
              className="h-[300px] w-[320px]  rounded-lg"
              alt=""
            />
            <div className="text-center Website_Name mb-4 py-3 mt-2">
              <p className="text-[18px] font-semibold">Alex Martinez</p>
              <p className="text-gray-400 text-sm">
                <small>Adviser</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Website_Name">
        <h1 className="text-center mb-20 text-2xl ">
          We get lost from one <span className="text-blue-500">darkness</span>{" "}
          to <span className="text-blue-500">another</span>. Then in the late{" "}
          <span className="text-blue-500">afternoon</span> a strange{" "}
          <span className="text-blue-500">unearthly</span>.
        </h1>

        <div
          id="industryExperiences"
          className="flex items-center justify-between m-20  "
        >
          <div className="w-[900px]">
            <h3 className="text-blue-500">INDUSTRY EXPERIENCES</h3>
            <h1 className="my-4 text-4xl">
              Digital solutions for <br /> your online business.
            </h1>
            <p>
              Hub IT allows your business and technology computers to store,{" "}
              <br />
              transmit, analyze, and manipulate big data.
            </p>
            <Link to="/service" className="mt-6 flex items-center FindMore">
              Learn more
              <img
                className="w-10 -ml-4 "
                src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
                alt=""
              />
            </Link>
          </div>
          <AccordionDemo />
        </div>
      </div>
    </div>
  );
};

export default About;
