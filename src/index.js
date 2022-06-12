//react imports
import React from "react";
import ReactDOM from "react-dom/client";

//router imports
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
    </Routes>
  </BrowserRouter>
);