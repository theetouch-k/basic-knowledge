import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar";

const Container = styled.div`
  height: 60px;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 25px;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Link to="/login" style={{ textDecoration: "none" }}>
        <MenuItem>SIGN IN</MenuItem>
      </Link>
      <Link to="/register" style={{ textDecoration: "none" }}>
        <MenuItem>SIGN UP</MenuItem>
      </Link>
    </Container>
  );
};

export default Home;
