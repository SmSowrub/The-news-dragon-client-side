import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Category from "../Page/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Page/News/News/News";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Page/Login/Login/Login";
import Register from "../Page/Login/Register/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: 'category',
        element: <Main></Main>,
        children: [
            {
                // element: <Category></Category>,
                //   loader:()=>fetch(`http://localhost:5000/news`),
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <News></News>,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            },
        ]
    }

])

export default router