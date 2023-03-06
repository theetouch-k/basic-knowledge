import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../component/Navbar";

const Container = styled.div``;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background: white;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: 1px solid black;
  padding: 14px 20px;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
`;

const ClickLink = styled.div`
  margin: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("password", password);
    axios
      .post("http://localhost:8000/login", {
        username: username,
        password: password,
      })
      .then((res) => console.log(res.data));
  };
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "gray" }}
          >
            <ClickLink>CREATE A NEW ACCOUNT</ClickLink>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
