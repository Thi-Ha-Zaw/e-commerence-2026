import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <ErrorPage />,
    children : [
        { index : true, element: <Home /> },
        { path: "product-detail/:productId", element: <ProductDetail /> },
        { path: "cart", element: <Cart />  },
    ]
  },
]);

