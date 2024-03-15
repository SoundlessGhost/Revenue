import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

function Conversion() {
  return (
    <>
      <div className="imContainer m-24 flex items-center justify-between Website_Name">
        <div>
          <img
            className="w-[500px] h-[350px] rounded-md"
            src="https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
            alt=""
          />
          <div className="image-wrapper left-[425px]">
            <img
              src="https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
              alt="Image 2"
              className="image2 w-[150px] h-[200px] rounded-md"
            />
          </div>
        </div>

        <div>
          <p className="text-[14px] text-red-500">Be Ready</p>
          <h1 className="text-4xl mt-4">
            Increase Conversion with <br /> Cart Features
          </h1>
          <p className="my-6">
            Our exclusive lifetime update theme & conversion centered design
            will keep your
            <br /> site running strong for many years to come.
          </p>
          <Link to="/portfolio" className="mt-6 flex items-center  FindMore">
            <p className=" bg-amber-500 p-3 rounded-sm">Explore</p>
            <img
              className="w-6 h-10 -ml-4 "
              src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
              alt=""
            />
          </Link>
        </div>
      </div>

      <div className=" mb-20 Website_Name">
        <Marquee>
          <div className="flex items-center">
            <div className="p-8 imgHover hover:bg-yellow-500 cursor-default rounded-md ml-10 flex items-center bg-slate-200">
              <img
                className="w-6 h-10 mr-4 "
                src="https://cdn-icons-png.flaticon.com/128/1988/1988028.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">Lazy Load Images</h1>
                <p className="text-gray-600">
                  Improve performance by delaying <br /> Loading images on
                  required pages
                </p>
              </div>
            </div>

            <div className="p-8 imgHover hover:bg-yellow-500 cursor-default rounded-md ml-10 flex items-center bg-slate-200">
              <img
                className="w-6 h-10 mr-4"
                src="https://cdn-icons-png.flaticon.com/128/7363/7363701.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">Ajax Sorting</h1>
                <p className="text-gray-600">
                  Locate your arranged data in a <br /> sorted list to find them
                  quickly
                </p>
              </div>
            </div>

            <div className="p-8 imgHover hover:bg-yellow-500 cursor-default rounded-md ml-10 flex items-center bg-slate-200">
              <img
                className="w-6 h-10 mr-4"
                src="https://cdn-icons-png.flaticon.com/128/679/679720.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">Ajax Infinite Loading</h1>
                <p className="text-gray-600">
                  Loading product catalog without <br /> having to reload the
                  entire page
                </p>
              </div>
            </div>

            <div className="p-8 imgHover hover:bg-yellow-500 cursor-default rounded-md ml-10 flex items-center bg-slate-200">
              <img
                className="w-6 h-10 mr-4"
                src="https://cdn-icons-png.flaticon.com/128/10503/10503321.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">Preconnect, Preload</h1>
                <p className="text-gray-600">
                  Pre APIs resolves and load <br /> assets without blocking DOM
                </p>
              </div>
            </div>

            <div className="p-8 imgHover hover:bg-yellow-500 cursor-default rounded-md ml-10 flex items-center bg-slate-200">
              <img
                className="w-6 h-10 mr-4"
                src="https://cdn-icons-png.flaticon.com/128/2612/2612924.png"
                alt=""
              />
              <div>
                <h1 className="font-bold">RTL Compatible & WPML</h1>
                <p className="text-gray-600">
                  Easily create a store in your <br /> language
                </p>
              </div>
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Conversion;
