import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
  return (
    <div className="mt-36 flex justify-between px-10 bg-slate-50 py-28 blogContainer">
      <div className="border-0 w-[800px] border-l-2 pl-6 border-blue-500">
        <h2 className="text-2xl mb-4">
          Patience is never weakness, it's a gift
        </h2>
        <p>
          One thing I learned in life, You can be important to someone but not
          all the time. And always remember everything is possible if you
          believe in yourself. Have patience with all things but first of all
          with yourself.
        </p>
        <Link to="/blogs">
          <button className="mt-6 flex items-center FindMore">
            <small>FIND OUT MORE</small>
            <img
              className="w-10 -ml-4 "
              src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
              alt=""
            />
          </button>
        </Link>
      </div>
      <div className="border-0 w-[830px] border-l-2 pl-6 border-blue-500">
        <h2 className="text-2xl mb-4">Paradise should be everyone's dream</h2>
        <p>
          The world is not a place to live. No one can take anything away.
          Nothing will go with you without prayer. So everyone needs to pray. To
          look at your soul's other half is to know that paradise is a real
          thing.
        </p>
        <Link to="/blogs">
          <button className="mt-6 flex items-center FindMore">
            <small>FIND OUT MORE</small>
            <img
              className="w-10 -ml-4"
              src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
              alt=""
            />
          </button>
        </Link>
      </div>
      <div className="border-0 w-[800px] border-l-2 pl-6 border-blue-500">
        <h2 className="text-2xl mb-4">Stay happy and spread happiness</h2>
        <p>
          Remember, you're the one who can fill the world with sunshine. If you
          see someone without a smile, give them one of yours. If you have good
          thoughts, they will shine out of your face, and you will always look
          lovely.
        </p>
        <Link to="/blogs">
          <button className="mt-6 flex items-center FindMore">
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
  );
};

export default Blog;
