import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import "aos/dist/aos.css";
import Register from "./components/Register";
import reportWebVitals from "./reportWebVitals";
import {Login} from "./components";
import HalamanProduct from "./pages/HalamanProduct";
import HalamanProduct2 from "./pages/HalamanProduct2";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HalamanDaftarJual from "./pages/HalamanDaftarJual";
import HomeLogin from "./pages/HomeLogin";
import {Protected} from './components';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<HomeLogin />} />
        <Route path="/login" 
            element={
              <Protected>
                <Login />
              </Protected>
            } 
          />
          <Route path="/register" 
            element={
              <Protected>
                <Register />
              </Protected>
            } 
          />
        <Route path="/halamanproduct" element={<HalamanProduct />} />
        <Route path="/halamanproduct2" element={<HalamanProduct2 />} />
        <Route path="/halamandaftarjual" element={<HalamanDaftarJual />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
