import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductList from "./components/ProductList/ProductList";

const routes = [
  {
    path: "/",
    exact : true,
    main: () => <HomePage />
  },
  {
    path: "/products-list",
    exact: false,
    main :() => <ProductList />
  },
  {
    path: "/:id/:slug.html",
    exact: false,
    main :() => <ProductList />
  },
  {
    path: "/chi-tiet/:slug/:id.html",
    exact: false,
    main :() => <ProductList />
  },
  {
    path: "",
    exact : false,
    main: () => <NotFoundPage />
  }

];

export default routes;
