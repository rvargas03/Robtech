import Layout from "@/components/landing/Layout"
import About from "@/pages/landing/About"
import Cart from "@/pages/landing/shop/Cart"
import Courses from "@/pages/landing/courses/Courses"
import Home from "@/pages/landing/Home"
import ProductDetails from "@/pages/landing/shop/ProductDetails"
import Products from "@/pages/landing/shop/Products"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "@/pages/auth/Login"
import Register from "@/pages/auth/Register"
import AuthLayout from "@/pages/auth/AuthLayout"
import Plans from "@/pages/landing/Plans"

export default function Index() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                    index: true,
                },
                {
                    path: "about",
                    element: <About />,
                },
                {
                    path: "courses",
                    element: <Courses />,
                },
                {
                    path: "products",
                    element: <Products />,
                },
                {
                    path: "cart",
                    element: <Cart/>,
                },
                {
                    path: "product/:id",
                    element: <ProductDetails />,
                },
                {
                    path: "plans",
                    element: <Plans />,
                }
            ],
        },
        {
            path: "/auth",
            element: <AuthLayout />,
            children: [
                {
                    path: "",
                    element: <Login />,
                    index: true,
                },
                {
                    path: "register",
                    element: <Register />,
                },
            ],
        }
    ])

  return (
    <RouterProvider router={router} />
  )
}
