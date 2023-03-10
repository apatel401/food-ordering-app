import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import "./app.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import  store  from './utils/store'
import { Provider } from 'react-redux'
import userConfig from "./components/Context";

import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Login from "./components/Login";
import ErrorHandling from "./components/ErrorHandling";
import About from "./components/About";
import Menu from "./components/Menu";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile";
import Cart from "./components/Cart";

const Instamart = lazy(() => import("./components/Instamart"));
import "./index.css";

function AppLayout() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]} />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorHandling />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
  <userConfig.Provider>
    <RouterProvider router={router} />
  </userConfig.Provider>
  </Provider>
);
