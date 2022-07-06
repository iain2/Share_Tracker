import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components' 

const NavBarContainer = styled.nav`
  text-align: left;
  background: #2E6171;
  width: 100%;
  overflow: hidden;
  border-bottom: 1px solid #220c10;

  ul {
    color: #ffffff;
    display: flex;
    flex-direction: row;
    list-style: none;
    li {
        padding: 5px 10px;
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
                <Link to='/user'>User</Link>
            </li>
            <li>
                <Link to="/shares">Shares</Link>
            </li>
        </ul>
        </NavBarContainer>
    )
};

export default NavBar