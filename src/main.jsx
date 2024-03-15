import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Main from "./components/LayOut/Main";
import NotFound from "./components/Pages/ErrorPage/notFound";
import Home from "./components/Home/Home/Home";
import Login from "./components/Pages/Login/Login";
import Register from "./components/Pages/Register/Register";
import AuthProvider from "./components/Provider/AuthProvider";
import About from "./components/Pages/Pages/About/About";
import Contact from "./components/Pages/Pages/Contact/Contact";
import Team from "./components/Pages/Pages/Team/Team";
import Product from "./components/Pages/Shop/Product/Product";
import ProductView from "./components/Pages/Shop/Product/ProductView/ProductView";
import Blogs from "./components/Pages/Blogs/Blogs";
import BlogsView from "./components/Pages/Blogs/BlogsView/BlogsView";
import Service from "./components/Pages/Service/Service";
import UserAccount from "./components/Pages/Shop/UserAccount/UserAccount";
import Portfolio from "./components/Pages/Portfolio/Portfolio";
import Cart from "./components/Pages/Shop/Cart/Cart";
import Checkout from "./Checkout";
import PrivateRoute from "./components/Provider/PrivateRoute/PrivateRoute";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/product",
        element: <Product />,
        loader: () => fetch("http://localhost:8000/product"),
      },
      {
        path: "/product/:id",
        element: <ProductView />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        loader: () => fetch("http://localhost:8000/blogs"),
      },
      {
        path: "/blogs/:id",
        element: <BlogsView />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            <UserAccount />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </React.StrictMode>
    </HelmetProvider>
  </AuthProvider>
);
