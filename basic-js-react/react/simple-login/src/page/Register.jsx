import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
  text-decoration: none;
`;

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let bodyFormData = new FormData();
    bodyFormData.append("username", username);
    bodyFormData.append("email", email);
    bodyFormData.append("password", password);
    axios
      .post("http://localhost:8000/api/v0/user", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => console.log(res.data));
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleClick}>Sign up</Button>
          <Link to="/login" style={{ textDecoration: "none", color: "gray" }}>
            <ClickLink>ALREADY HAVE AN ACCOUNT?</ClickLink>
          </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
