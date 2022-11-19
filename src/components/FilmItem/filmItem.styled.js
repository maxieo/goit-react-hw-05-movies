import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledList = styled.ul`
  list-style: none;
  width: 400px;
  cursor: pointer;
  text-decoration: none;
  
`
export const Link = styled(NavLink)`
  text-decoration: none;
  width: 100%;
`
export const PosterFilm = styled.img`
  display: block;
  width: 100%;
`