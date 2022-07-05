import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components' 

const FooterContainer = styled.footer`
  text-align: center;
  background: #2E6171;
  width: 100%;
  margin: 0;
  padding: 1px;
  color: #ffffff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #220c10;
`

const FooterBar = () => {


    return (
        <FooterContainer>
        <h3>Stocks is so fun!</h3>
        </FooterContainer>
    )
};


export default FooterBar;