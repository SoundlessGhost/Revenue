/* eslint-disable react/no-unescaped-entities */
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

import useAuth from "../../Hooks/useAuth";
import DropDown from "../DropDown/DropDown";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const pages = [
  {
    title: "Team",
    href: "/team",
  },

  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "About Us",
    href: "/about",
  },
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  //
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 800);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle_Go_Every Where

  const handleGoCart = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast("please login first");
    } else {
      navigate("/cart");
    }
  };

  const handleGoProduct = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast("please login first");
    } else {
      navigate("/product");
    }
  };

  const handleGoCheckout = () => {
    if (!user) {
      navigate("/login", { state: { from: location } });
      toast("please login first");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="flex items-center justify-between container pt-5 pb-10 Website_Name bg-slate-50">
          <Link to="/">
            <div className="flex items-center">
              <img
                className="w-8 mr-1"
                src="https://cdn-icons-png.flaticon.com/128/3917/3917053.png"
                alt=""
              />
              <p className="text-3xl">Revenue</p>
            </div>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-50">
                  Page
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-sm bg-slate-50 italic">
                  <ul className="p-4 md:w-[500px]  lg:w-[200px] ">
                    {pages.map((page) => (
                      <div
                        key={page.title}
                        className="block select-none space-y-1 cursor-pointer rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to={page.href}>
                          <p>{page.title}</p>
                          <p className="border-0 border-b border-blue-500 h-1 w-4"></p>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-50">
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-sm bg-slate-50 italic">
                  <div className="p-4 md:w-[500px]  lg:w-[200px] ">
                    <ul>
                      <div
                        onClick={handleGoCart}
                        className="block select-none space-y-1 cursor-pointer rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <button>
                          <p>Cart</p>
                          <p className="border-0 border-b border-green-500 h-1 w-4"></p>
                        </button>
                      </div>
                    </ul>

                    <ul>
                      <div
                        onClick={handleGoProduct}
                        className="block select-none space-y-1 cursor-pointer rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <button>
                          <p>Product</p>
                          <p className="border-0 border-b border-green-500 h-1 w-4"></p>
                        </button>
                      </div>
                    </ul>

                    <ul>
                      <div
                        onClick={handleGoCheckout}
                        className="block select-none space-y-1 cursor-pointer rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <button>
                          <p>Checkout</p>
                          <p className="border-0 border-b border-green-500 h-1 w-4"></p>
                        </button>
                      </div>
                    </ul>
                  </div>

                  {/* <ul className=" w-[400px]  p-4 md:w-[500px]  lg:w-[250px] ">
                    {shops.map((shop) => (
                      <div
                        key={shop.title}
                        className="block select-none space-y-1 cursor-pointer rounded-md py-3 px-4 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <Link to={shop.href}>
                          <p>{shop.title}</p>
                          <p className="border-0 border-b border-green-500 h-1 w-4"></p>
                        </Link>
                      </div>
                    ))}
                  </ul> */}
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-50">
                  <Link to="/portfolio">Portfolio</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-slate-50">
                  <Link to="/blogs">Blog</Link>
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center">
            {user ? (
              <>
                <DropDown></DropDown>
              </>
            ) : (
              <>
                <Link className="mr-1 hover:underline" to="/login">
                  Login
                </Link>{" "}
                {"/"}
                <Link className="ml-1 hover:underline" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
