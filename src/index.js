import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import App from "./App";
import { movies } from "./movieDummy";
import { GlobalStyles } from "./Components/Movie/Movie.style";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App {...movies} />
  </React.StrictMode>
);
