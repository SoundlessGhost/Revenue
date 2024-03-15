import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../Home/Header/Header";
import { Toaster } from "react-hot-toast";
import ScrollToTopButton from "../Home/ScrollTop/ScrollTop";
import Footer from "../Home/Footer/Footer";

const Main = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {pathname == "/login" ||
      pathname == "/register" ||
      pathname == "/not_found" ? null : (
        <Header />
      )}
      <ScrollToTopButton />
      <Outlet />
      {pathname == "/login" ||
      pathname == "/register" ||
      pathname == "/not_found" ||
      pathname == "/checkout" ||
      pathname == "/cart" ? null : (
        <Footer />
      )}
      <Toaster />
    </div>
  );
};

export default Main;
