import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";
import CategoriesPage from "./pages/PrevCategories/CategoriesPage.jsx";
import { CategoryContext, CategoryContextProvider } from "./context/CategoryContext.jsx";
import ProductDetails from "./pages/DetalhesProducts/ProductDetails.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/categorias",
        element: <CategoriesPage />,
      },
      {
        path: '/categorias/info/:id',
        element: <ProductDetails />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryContextProvider>
      <RouterProvider router={route} />
    </CategoryContextProvider>
  </React.StrictMode>
);
