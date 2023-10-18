import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-right: 10px;
  width: 80%;
  outline: none;
  border: none;
`;

const Button = styled.button`
  padding: 10px 9px;
  font-size: 16px;
  border-radius: 4px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const Logo = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #955656;
  background-image: linear-gradient(315deg, #955656 0%, #2c3e50 74%);
`;
const Header = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 60px;
`;

const HeaderText = styled.div`
  font-size: 40px;
  color: #fff;
  font-weight: bold;  
  `;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 600px;
  justify-content: center;
  `
const Footer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 10px;
  text-align: center;
  font-size: 14px;
  color: #fff;
  a {
    color: #fff;
    text-decoration: none;
    }
    `

function WeatherForm() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/weather/${city}`);
  };

  return (
    <Container>
      <Wrapper>
      <Header>
        <HeaderText>Weather App</HeaderText>
        <Logo>
          <a href="https://github.com/niku7735" target="_blank" rel="noreferrer">
          <AiFillGithub size="40px" style={{cursor:"pointer",color:"black"}}/>
          </a>
        </Logo>
      </Header>
      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button type="submit">Get Weather</Button>
      </FormContainer>
      </Wrapper>
      <Footer>
        <p>Created by<a href="https://www.linkedin.com/in/soumya-ranjan-sahoo-620726212" target="_blank" rel="noreferrer"><b>Soumya Ranjan Sahoo</b></a></p>
      </Footer>
    </Container>
  );
}

export default WeatherForm;
