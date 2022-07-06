import React, { useEffect, useState } from "react";
import styled from "styled-components";

const JokeContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: auto;
    align-items: center;
`

const Button = styled.button`
  background-color: #2e6171;
  border: none;
  color: #ffffff;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;

  &:hover{cursor: pointer;}
`

function Home() {

    const [dadJoke, setDadJoke] = useState("");

    const fetchJoke =  function(){
      fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,political,racist,sexist,explicit&type=single")
      .then(response => response.json())
      .then(data => setDadJoke(data.joke))
    }

  return (
    <JokeContainer>
    <h2>Stocks are boring, so here are some jokes!</h2>
    <h3>{dadJoke}</h3>
    <Button onClick={fetchJoke}>Click here for a laugh!</Button>
    </JokeContainer>
  );
}

export default Home;