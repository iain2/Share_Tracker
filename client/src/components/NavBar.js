import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components' 

const NavBarContainer = styled.nav`
    color: white;
  text-align: left;
  background: #556f7a;
  width: 100%;
  ul {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    border: 1px solid green;
    list-style: none;
    li {
      padding: 15px 15px;
      border: 2px #ffffff;
    }
    a {
        color: #ffffff;
        text-decoration: none;
    }
}
`

const NavBar = () => {


    return (
        <NavBarContainer>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shares">Shares</Link>
            </li>
        </ul>
        </NavBarContainer>
    )
};


export default NavBar