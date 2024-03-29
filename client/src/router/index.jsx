import {createBrowserRouter, Outlet} from "react-router-dom";
import Login from "../pages/Login.jsx";
import Home from "../pages/Home.jsx";

const AuthLayout = () => {
    return <Outlet />
}

export default createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <Home />,
                path: '/'
            }
        ]
    }
])