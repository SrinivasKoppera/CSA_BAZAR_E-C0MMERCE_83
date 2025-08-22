import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// const createElement = React.createElement(
//   "h1",
//   {
//     className: "heading",
//     id: "heading",
//   },
//   "Hello World"
// );

// createRoot(document.getElementById("root")).render(createElement);
