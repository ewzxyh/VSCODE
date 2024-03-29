import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Geral from "./components/pages/Geral";
import NovaPagina from "./components/pages/NovaPagina";
import PaginaEdicao from "./components/pages/PaginaEdicao";

interface LayoutProps {
  children: JSX.Element;
}

const Layout = (props:LayoutProps) => {
  return (
    <Container customClass = "min-height">
      {React.cloneElement (props.children)}
    </Container>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element = {
          <Layout>
            <Home />
          </Layout>
        }
        />
        <Route path="/restaurante" element = {
          <Layout>
            <Geral />
          </Layout>
        }
        />
        <Route path="/restaurante/novo" element = {
          <Layout>
            <NovaPagina />
          </Layout>
        }
        />
        <Route path="/restaurante/:id" element = {
          <Layout>
            <PaginaEdicao />
          </Layout>
        }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;