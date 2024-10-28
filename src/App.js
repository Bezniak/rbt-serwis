import React from 'react';
import './App.css';
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {ROUTES} from "./config/routes.js";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import AboutUs from "./components/AboutUs/AboutUs";
import Prices from "./components/Prices/Prices";
import FAQ from "./components/FAQ/FAQ";
import Blog from "./components/Blog/Blog";


const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

const App = () => {
    const router = createBrowserRouter([
        {
            path: ROUTES.HOME,
            element: <Layout/>,
            errorElement: <NotFound/>,
            children: [
                {
                    path: ROUTES.HOME,
                    element: <Home/>
                },
                {
                    path: ROUTES.NOT_FOUND,
                    element: <NotFound/>
                },
                {
                    path: ROUTES.SERVICES,
                    element: <Services/>
                },
                {
                    path: ROUTES.ABOUT_US,
                    element: <AboutUs/>
                },
                {
                    path: ROUTES.PRICES,
                    element: <Prices/>
                },
                {
                    path: ROUTES.FAQ,
                    element: <FAQ/>
                },
                {
                    path: ROUTES.BLOG,
                    element: <Blog/>
                },
            ]
        },
    ]);

    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
};

export default App;
