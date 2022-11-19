import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkButton = styled.div`
  margin: 20px 20px 20px 0;
`

export const LocBtn = styled(NavLink)`
  width: 150px;
  margin-right: 10px;
  font-size: 15px;
  padding: 10px 20px;
  text-align: center;
  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  &:hover,
  &:focus {
    background-color: indigo;
    color: white;
  }
`