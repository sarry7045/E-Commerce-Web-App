import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import SingleProduct from "./Components/SingleProduct";
import Footer from "./Footer";
// const Home = React.lazy(() => import("./Components/Home"));
// const Products = React.lazy(() => import("./Components/Products"));
// const About = React.lazy(() => import("./Components/About"));
// const Contact = React.lazy(() => import("./Components/Contact"));
// const SingleProduct = React.lazy(() => import("./Components/SingleProduct"));
// const Cart = React.lazy(() => import("./Components/Cart"));

function App() {
  const theme = {
    colors: {
      // heading: "rgb(24 24 29)",
      heading: "#101820FF",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      // helper: "#8490ff",
      helper: "#ffd600",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      // btn: "rgb(98 84 243)",
      btn: "#ffd600",
      // border: "rgba(98, 84, 243, 0.5)",
      border: "#ffd600",
      hr: "#ffffff",
      // gradient:
      //   "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      gradient: "linear-gradient(0deg, #ffd600 0%, #ffd600 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
