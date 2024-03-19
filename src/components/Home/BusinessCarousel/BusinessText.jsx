import { Link } from "react-router-dom";

const BusinessText = () => {
  return (
    <div id="BusinessTextContainer" className="h-[400px] w-[600px] ml-28 talk">
      <p>
        <small className="text-gray-400">FIND OUT MORE</small>
      </p>
      <div>
        <div id="BusinessTextTitle" className="text-6xl my-4">
          Talk to our <br /> <div className="text-orange-900">support Team</div>
        </div>
        <p className="talkTitle">Learn more about the range of our services.</p>
        <p className="w-[400px] mt-4">
          Nihil maiores quo quae adipisci neque rerum necessitatibus non.
          Excepturi suscipit repudiandae ea exercitationem! Nemo.
        </p>
        <Link to="/contact" className="mt-6 flex items-center FindMore">
          <small className=" bg-amber-500 p-3 rounded-sm">CONTACT US</small>
          <img
            className="w-10 -ml-4 "
            src="https://cdn-icons-png.flaticon.com/128/13554/13554816.png"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
};

export default BusinessText;
