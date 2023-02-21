import About from "../component/About/About";
import Contact from "../component/Contact/Contact";
import AddHome from "../component/Dashbord/AddHome";
import AllHome from "../component/Dashbord/AllHome";
import Status from "../component/Dashbord/Status";
import DashbordLayout from "../layout/DashbordLayout";
import SignUp from "../page/login/SignUp";
import SellerRequest from "../page/Seller/SellerRequest/SellerRequest";
import Login from "./../page/login/Login";
const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layout/main/MainLayout");
const { default: Home } = require("../page/home/Home");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/contactus",
        element: <Contact></Contact>,
      },
      {
        path: "/aboutus",
        element: <About></About>,
      },
      {
        path: "/requestseller",
        element: <SellerRequest></SellerRequest>,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashbordLayout></DashbordLayout>,
    children: [
      {
        path: "/dashbord/",
        element: <Status />,
      },
      {
        path: "/dashbord/addhome",
        element: <AddHome></AddHome>,
      },
      {
        path: "/dashbord/allhome",
        element: <AllHome />,
      },
    ],
  },
]);

export default routes;
