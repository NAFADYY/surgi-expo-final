// import Navbar from './Navbar';
// import Footer from './Footer';
// import Category from './Category';


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Subcategories from "./Components/Subcategories/Subcategories";
import ProductPage from "./Components/ProductPage/ProductPage";
import ProductPageRandom from "./Components/ProductPageRandom/ProductPageRandom";
import Productdetails from "./Components/Productdetails/Productdetails";
import AboutUs from "./Components/AboutUs/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";


let routers = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/subcategories/:id', element: <Subcategories /> },
  { path: '/ProductPage/:id', element: <ProductPage /> },
  { path: '/ProductsPage', element: <ProductPageRandom /> },
  { path: '/ProductDetails/:id', element: <Productdetails /> },
  { path: '/AboutUs', element: <AboutUs /> },
  { path: '/contact-us', element: <ContactUs /> },

]);


function App() {


  return (<>
    <switch>

      <RouterProvider router={routers} />
    </switch>
  </>



  );
}

export default App;