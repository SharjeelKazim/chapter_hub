import "./App.css";
import React from "react";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from './Pages/SignUpPage';
import HomePage from'./Pages/HomePage';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
    const router = createBrowserRouter([
    
        {
          path: "/",
          element: <SignUpPage/>,
        },
        {
          path: "/login_page",
          element:   <LoginPage/>,
        },
        {
          path:"home",
          element:<HomePage/>,
        },
    
      ]);
      return <RouterProvider router={router} />;
    }
    
    export default App;
    
