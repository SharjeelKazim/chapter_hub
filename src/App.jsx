import "./App.css";
import React, { useState, useEffect } from "react";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer_Page from "./components/Home/Footer_Page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Books from "./Pages/Books";
import Dynamic from "./Pages/Product";
import Product from "./Pages/Product";

function App() {
  const queryClient = new QueryClient();

  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Update the <html> element's class when theme changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <SignUpPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </>
      ),
    },
    {
      path: "/login_page",
      element: (
        <>
          <LoginPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <HomePage />
          <Footer_Page isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </>
      ),
    },

    {
      path: "/book",
      element: (
        <>
          <Books />
          <Footer_Page isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        </>
      ),
    },

    {
      path: "/products/:id",
      element: (
        <>
          <Product />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
