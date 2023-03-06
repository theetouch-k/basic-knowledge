import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 80px;
  display: block;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "teal" }}>
            <Logo>Module Management</Logo>
          </Link>
        </Center>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
