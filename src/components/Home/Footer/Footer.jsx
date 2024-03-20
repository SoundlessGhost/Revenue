import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div
        className="flex px-20 py-24 bg-slate-100 "
        id="footerContainer"
      >
        <div>
          <h1 className="font-serif text-5xl mb-2" id="headerName">
            Revenue
          </h1>
          <p className="w-[500px] Website_Name" id="footerText">
            Get education on business planning, direct access to planning
            experts and a funding platform that’s helped raise over 5M .
          </p>
          <p className="border-0 border-t border-gray-500 h-1 w-6"></p>

          <div className=" flex items-center mt-4" id="footerMediaImg">
            <Link
              target="blank"
              to="https://www.facebook.com/shahed.abiddarpon"
            >
              <img
                className="w-9 ml-4 rounded-full border-gray-400 cursor-pointer border p-2 "
                src="https://cdn-icons-png.flaticon.com/128/20/20837.png"
                alt=""
              />
            </Link>
            <Link target="blank" to="https://github.com/SoundlessGhost">
              <img
                className="w-9 ml-4 rounded-full border-gray-400 cursor-pointer border p-2 "
                src="https://cdn-icons-png.flaticon.com/128/733/733609.png"
                alt=""
              />
            </Link>
            <Link target="blank" to="https://www.linkedin.com/in/shahed2247/">
              <img
                className="w-9 ml-4 rounded-full border-gray-400 cursor-pointer border p-2 "
                src="https://cdn-icons-png.flaticon.com/128/3128/3128219.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="flex justify-between" id="footerTitleContainer">
          <div className="Website_Name ml-24" id="footerTitle">
            <h1 className="font-serif mb-2">COMPANY</h1>
            <div>
              <p className="text-gray-500 hover:text-black">
                <Link to="/about">About Us</Link>
              </p>
              <p className="text-gray-500 hover:text-black">
                <Link to="/team">Services</Link>
              </p>
              <p className="text-gray-500 hover:text-black">
                <Link to="/contact">Contact</Link>
              </p>
              <p className="border-0 border-t border-blue-500 h-1 w-6"></p>
            </div>
          </div>

          <div className="Website_Name ml-24" id="footerTitle">
            <h1 className="font-serif mb-2">SOLUTIONS</h1>
            <p className="text-gray-500 hover:text-black">
              <Link to="/team">Business Consulting</Link>
            </p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/team">Financial Advisory</Link>
            </p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/team">Business Planning</Link>
            </p>
            <p className="border-0 border-t border-red-500 h-1 w-6"></p>
          </div>

          <div className="Website_Name ml-24" id="footerTitle">
            <h1 className="font-serif mb-2">CONTACT</h1>
            <p className="text-gray-500 hover:text-black flex items-center">
              <img
                className="w-4 mr-1"
                src="https://cdn-icons-png.flaticon.com/128/725/725624.png"
                alt=""
              />
              <Link to="/contact">01794951003</Link>
            </p>
            <p className="text-gray-500 hover:text-black flex items-center">
              <img
                className="w-4 mr-1"
                src="https://cdn-icons-png.flaticon.com/128/6244/6244710.png"
                alt=""
              />
              <Link to="/contact">shahedak47mk47@gmail.com</Link>
            </p>
            <div className="text-gray-500 hover:text-black flex items-center">
              <img
                className="w-4 mr-1"
                src="https://cdn-icons-png.flaticon.com/128/5616/5616461.png"
                alt=""
              />
              <p>Sirajganj, Dhaka, Bangladesh</p>
            </div>
            <p className="border-0 border-t border-green-500 h-1 w-6"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
