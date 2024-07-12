import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home.jsx";
import CategoriesPage from "./pages/PrevCategories/CategoriesPage.jsx";
import { CategoryContextProvider } from "./context/CategoryContext.jsx";
import ProductDetails from "./pages/DetalhesProducts/ProductDetails.jsx";
import {
  MeuCartContext,
  MeuCartContextProvider,
} from "./context/CartContext.jsx";

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
        path: "/categorias",
        element: <CategoriesPage />,
      },
      {
        path: "/categorias/info/:id",
        element: <ProductDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryContextProvider>
      <MeuCartContextProvider>
        <RouterProvider router={route} />
      </MeuCartContextProvider>
    </CategoryContextProvider>
  </React.StrictMode>
);
