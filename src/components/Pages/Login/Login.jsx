import { Helmet } from "react-helmet";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const { logInUser, googleSignIn } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    const { email, password } = data;
    logInUser(email, password)
      .then(() => {
        const userInfo = {
          email: email,
        };
        fetch("https://revenue-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }).then((res) => res.json());

        navigate(from, { replace: true });
        toast.success("user login successfully");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        const userInfo = {
          email: user.email,
        };
        fetch("https://revenue-server.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        }).then((res) => res.json());

        toast.success("user login Successfully");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>Login || The world of revenue</title>
      </Helmet>

      <div className="grid grid-cols-[3fr,1.2fr] ml-10">
        <div>
          <div
            onClick={() => navigate("/")}
            className="flex cursor-pointer items-center mt-4"
          >
            <img
              className="w-8 mr-1"
              src="https://cdn-icons-png.flaticon.com/128/3917/3917053.png"
              alt=""
            />
            <p className="Website_Name text-3xl">Revenue</p>
          </div>

          <div className="mt-[120px] ml-[200px]">
            <h3 className="Website_Name text-4xl">Login To Your Account</h3>
            <small className="Website_Name ml-[90px]">
              Login Using Social Networks
            </small>
            <section className="flex items-center ml-28 mt-2 mb-4">
              <img
                className="w-6 ml-2 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/145/145802.png"
                alt=""
              />
              <img
                onClick={handleGoogleLogIn}
                className="w-6 ml-2 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/179/179326.png"
                alt=""
              />
              <img
                className="w-6 ml-2 cursor-pointer"
                src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                alt=""
              />
            </section>
            <hr className="w-40 ml-20 mt-2 mb-4"></hr>

            <form action="" onSubmit={handleSubmit(onsubmit)}>
              <div>
                <input
                  className="p-2 pl-8 rounded-lg w-96 placeholder:font-serif border-slate-300 border"
                  type="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Required !!!",
                    },
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                      message: "Invalid Email Provided !!!",
                    },
                  })}
                  placeholder=" Email"
                  style={{
                    backgroundImage:
                      'url("https://cdn-icons-png.flaticon.com/128/542/542638.png")',
                    backgroundSize: "15px 15px",
                    backgroundPosition: "8px center",
                    backgroundRepeat: "no-repeat",
                  }}
                />{" "}
                <br />
                <label className="level font-bold">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500 text-[10px]">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 text-[10px]">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div>
                <input
                  className="p-2 pl-8 rounded-lg w-96 placeholder:font-serif border-slate-300 border mt-4"
                  type="password"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password Required !!!",
                    },
                    pattern: {
                      value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                      message:
                        "Password Must be 8 character & including a special character !!!",
                    },
                  })}
                  placeholder=" Password"
                  style={{
                    backgroundImage:
                      'url("https://cdn-icons-png.flaticon.com/128/8300/8300875.png")',
                    backgroundSize: "18px 18px",
                    backgroundPosition: "8px center",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <br />
                <label className="level font-bold">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500 text-[10px]">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="label-text-alt text-red-500 text-[10px]">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <input
                className="cursor-pointer ml-[130px] bg-gray-400 p-2 w-32 rounded-lg Website_Name  mt-4"
                type="submit"
                value="Sign In"
              />
            </form>
          </div>
        </div>
        <div className="h-[100vh] bg-slate-400 text-center Website_Name">
          <h1 className="mt-[200px] text-5xl mb-4 ">Hello Friend!</h1>
          <p className="text-1xl">
            Enter our personal details and <br /> start the journey with us.
          </p>
          <Link to="/register">
            <p className="border-slate-500 border rounded-lg py-2 w-32 mt-6 ml-[140px]">
              Sign Up
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
