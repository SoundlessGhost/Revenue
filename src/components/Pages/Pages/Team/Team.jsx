import { Link } from "react-router-dom";
import Ceo from "../../../../assets/shahed.jpg";
const Team = () => {
  return (
    <div  className="mt-20">
      <div className="flex justify-center py-20 Website_Name text-center bg-slate-50">
        <div>
          <small>
            <Link to="/">HOME</Link> / <Link to="/team">TEAM</Link>
          </small>
          <p className="text-4xl my-4">Team</p>
          <p className="">
            We can help you develop and execute a clear and strategic <br /> IT
            roadmap with priorities that are closely linked to business goals.
          </p>
        </div>
      </div>

      <div className="grid  mt-10 mx-20 grid-cols-[6fr,3fr]">
        <div className="flex">
          <div className="mr-20">
            <div className="mb-10">
              <img
                src={Ceo}
                className="h-[300px] w-[320px]  rounded-lg"
                alt=""
              />
              <div className="text-center Website_Name mb-4 mt-2">
                <p className="text-[18px]">Shahed Abid</p>
                <p className="text-gray-400 text-sm">
                  <small>DESIGNER & DEVELOPER</small>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGJ1c2luZXNzfGVufDB8fDB8fHww"
                className="h-[300px] w-[320px]  rounded-lg"
                alt=""
              />
              <div className="text-center Website_Name mb-4 mt-2">
                <p className="text-[18px]">ABIR HOSEN</p>
                <p className="text-gray-400 text-sm">
                  <small>DESIGNER & DEVELOPER</small>
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <img
                src="https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNlb3xlbnwwfHwwfHx8MA%3D%3D"
                className="h-[300px] w-[320px]  rounded-lg"
                alt=""
              />
              <div className="text-center Website_Name mb-4 mt-2">
                <p className="text-[18px]">Claudia Arla</p>
                <p className="text-gray-400 text-sm">
                  <small>CEO</small>
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://plus.unsplash.com/premium_photo-1661265862059-dcfcd27304e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2VvfGVufDB8fDB8fHww"
                className="h-[300px] w-[320px]  rounded-lg"
                alt=""
              />
              <div className="text-center Website_Name mb-4 mt-2">
                <p className="text-[18px]">Alex Martinez</p>
                <p className="text-gray-400 text-sm">
                  <small>Adviser</small>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="Website_Name">
          <h1 className="text-6xl my-6">Our Creative Team </h1>
          <hr />
          <div className="my-10">
            <h1 className="text-4xl mb-6 text-gray-600">Our Goal</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates dolorum placeat exercitationem? Dolorem reiciendis
              itaque consectetur quia blanditiis eum sit.
            </p>
          </div>
          <hr />
          <div className="my-10">
            <h1 className="text-4xl mb-6 text-gray-600">Our Mission</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates dolorum placeat exercitationem? Dolorem reiciendis
              itaque consectetur quia blanditiis eum sit.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center my-28 Website_Name">
        <p className="text-blue-400">
          <small>GET CONNECT</small>
        </p>
        <h1 className="text-4xl my-4">Sign up in minutes, quick and easy.</h1>
        <p className="mb-8">
          We think life insurance should be more about living. So we’ve designed{" "}
          <br />
          our products to protect and create wealth while you’re alive.
        </p>
        <Link
          to="/login"
          className="cursor-pointer bg-gradient-to-r mt-4 from-blue-500 text-white to-indigo-400 px-3 py-2 rounded-sm "
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Team;
