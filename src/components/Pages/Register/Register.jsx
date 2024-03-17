import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, googleSignIn, updateUserProfile } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then(() => {
        updateUserProfile(name)
          .then()
          .catch((e) => {
            toast.error(e.message);
          });
        navigate(from, { replace: true });
        toast.success(`user created Successfully`);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("user created Successfully ");
        navigate(from, { replace: true });
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div>
      <div className=" bg-gray-50">
        <Helmet>
          <title>Register || The world of revenue</title>
        </Helmet>
        <div className="grid grid-cols-[1.2fr,3fr]">
          <div className="h-[100vh] bg-slate-400 text-center Website_Name">
            <div
              onClick={() => navigate("/")}
              className="flex items-center mt-4 ml-10 cursor-pointer"
            >
              <img
                className="w-8 mr-1"
                src="https://cdn-icons-png.flaticon.com/128/3917/3917053.png"
                alt=""
              />
              <p className="Website_Name text-3xl">Revenue</p>
            </div>
            <h1 className="mt-[150px] text-5xl mb-4 ">Welcome Back!</h1>
            <p className="text-1xl">
              To keep connected with us please <br /> login with your personal
              information .
            </p>
            <Link to="/login">
              <p className="border-slate-500 border rounded-lg py-2 w-32 mt-6 ml-[140px]">
                Sign In
              </p>
            </Link>
          </div>
          <div>
            <div className="mt-[120px] ml-[200px]">
              <h3 className="Website_Name text-4xl ml-4">
                Create Your Account
              </h3>
              <small className="Website_Name ml-[80px]">
                Register Using Social Networks
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
                    type="text"
                    {...register("name", {
                      required: {
                        value: true,
                        message: "Name Required !!!",
                      },
                    })}
                    placeholder=" Name"
                    style={{
                      backgroundImage:
                        'url("https://cdn-icons-png.flaticon.com/128/8042/8042420.png")',
                      backgroundSize: "18px 18px",
                      backgroundPosition: "8px center",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <br />
                  <label className="level font-bold">
                    {errors.name?.type === "required" && (
                      <span className="label-text-alt text-red-500 text-[10px]">
                        {errors.name.message}
                      </span>
                    )}
                  </label>
                </div>
                <div>
                  <input
                    className="p-2 pl-8 rounded-lg w-96 placeholder:font-serif border-slate-300 border mt-4"
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
                  className="cursor-pointer ml-[130px] bg-gray-400 p-2 w-32 rounded-lg Website_Name mt-4"
                  type="submit"
                  value="Sign Up"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
