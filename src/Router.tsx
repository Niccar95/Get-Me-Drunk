import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { ErrorPage } from "./pages/ErrorPage";
import { DrinksPage } from "./pages/DrinksPage";

import { Favourites } from "./pages/Favourites";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/drinks",
        element: <DrinksPage></DrinksPage>,
      },
      {
        path: "/favourites",
        element: <Favourites></Favourites>,
      },
    ],

    errorElement: <ErrorPage />,
  },
]);
