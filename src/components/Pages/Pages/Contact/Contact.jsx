// import React from 'react';

import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="mt-20">
      <Helmet>
        <title>Contact || The world of revenue</title>
      </Helmet>
      <div
        id="TeamAboutContactContainer"
        className="flex justify-center py-20 Website_Name text-center bg-slate-50"
      >
        <div>
          <small>
            <Link to="/">HOME</Link> / <Link to="/contact">CONTACT</Link>
          </small>
          <p className="text-4xl my-4">Contact</p>
          <p id="TeamAboutContactContainerText">
            We can help you develop and execute a clear and strategic <br /> IT
            roadmap with priorities that are closely linked to business goals.
          </p>
        </div>
      </div>

      <div id="ContactContainer" className="flex justify-between items-center mt-20 mx-20 px-10 py-10 rounded-lg shadow-lg">
        <div>
          <form className="Website_Name" action="">
            <label>
              <p className="mb-2">
                <small>NAME</small>{" "}
              </p>
              <input
                className="p-4 w-[500px] bg-gray-50 mb-4 border border-gray-300 rounded-lg "
                type="text"
                placeholder="name"
              />
            </label>
            <label>
              <p className="mb-2">
                <small>EMAIL</small>{" "}
              </p>
              <input
                className="p-4 w-[500px] bg-gray-50 mb-4 border border-gray-300 rounded-lg "
                type="email"
                placeholder="email"
              />
            </label>
            <label>
              <p className="mb-2">
                <small>YOUR MESSAGE</small>
              </p>
              <textarea
                className="p-4 w-[500px] border bg-gray-50 border-gray-300 rounded-lg "
                name=""
                id=""
                cols="30"
                placeholder="your message"
                rows="10"
              ></textarea>{" "}
              <br />
            </label>
            <input
              className="cursor-pointer bg-gradient-to-r mt-4 from-yellow-400 to-red-400 px-6 py-2 rounded-md Website_Name"
              type="submit"
              value="Submit"
            />
          </form>
        </div>

        <div id="ContactInformation" className="flex h-[450px] bg-gradient-to-r w-[450px] text-center from-sky-400 to-indigo-500 py-10 px-10 justify-between border border-gray-300 rounded-lg">
          <div className="Website_Name">
            <h1 className="text-3xl text-center mb-4">Contact Information</h1>
            <p>We’ll create high-quality linkable content</p>

            <div className="mt-48 contactNumber">
              <div className="flex items-center">
                <img
                  className="w-6 mb-2 mr-2"
                  src="https://cdn-icons-png.flaticon.com/128/724/724664.png"
                  alt=""
                />
                <p className="-mt-2">01794951003</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-6 mb-2 mr-2"
                  src="https://cdn-icons-png.flaticon.com/128/6806/6806987.png"
                  alt=""
                />
                <p className="-mt-2">shahedak47mk47@gmail.com</p>
              </div>
              <div className="flex items-center">
                <img
                  className="w-6 mb-2 mr-2"
                  src="https://cdn-icons-png.flaticon.com/128/2991/2991231.png"
                  alt=""
                />
                <p className="-mt-2">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="ContactHelpAndSupportContainer" className="flex justify-around items-center mx-20 my-32 Website_Name">
        <div id="ContactImgContainer">
          <img
            className="w-16"
            src="https://cdn-icons-png.flaticon.com/128/4293/4293688.png"
            alt=""
          />
          <h1 className="text-3xl my-4">Help & Support</h1>
          <p className="">
            Email{" "}
            <span className=" text-blue-500">shahedak47mk47@gmail.com</span> for
            help with <br /> a current product or service or refer to FAQs.
          </p>
        </div>

        <div id="ContactImgContainer">
          <img
            className="w-16"
            src="https://cdn-icons-png.flaticon.com/128/6717/6717201.png"
            alt=""
          />
          <h1 className="text-3xl my-4">Call Us</h1>
          <p>
            Talk to Our Team <span className=" text-blue-500">01794951003</span>
            <br />
            call us.
          </p>
        </div>

        <div id="ContactImgContainer">
          <img
            className="w-16"
            src="https://cdn-icons-png.flaticon.com/128/12523/12523289.png"
            alt=""
          />
          <h1 className="text-3xl my-4">Social Media</h1>
          <p>
            Get in touch with Social <br /> media resources at
            <span className=" text-blue-500"> free@sin.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
