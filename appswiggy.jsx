import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDom from "react-dom/client";
// import Menu from "./component/Menu";
// import Body from "./component/Body";
import ErrorPage from "./component/ErrorPage";
// import Contact from "./component/Contact";
import Subres from "./component/Subres";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./component/cart";

const Menu = lazy(() => import("./component/Menu"));
const About = lazy(() => import("./component/About"));
const Body = lazy(() => import("./component/Body"));
const Contact = lazy(() => import("./component/Contact"));

const LayoutSwiggy = () => {
  const [userNmae, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "sivasamy saroja",
    };

    setUserName(data.name);
  }, []);
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ logInUser: userNmae, setUserName }}>
        <div>
          <Suspense fallback={<h1>menu</h1>}>
            <Menu />
          </Suspense>

          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSwiggy />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Body</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>About</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<h1>Loaing</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: (
          <Suspense fallback={<h1>menu</h1>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/res/:resId",
        element: <Subres />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoute} />);
