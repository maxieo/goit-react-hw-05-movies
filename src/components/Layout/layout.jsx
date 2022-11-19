import { Outlet } from "react-router-dom"
import { Header, Nav, Button } from "./layout.styled"

export const Layout = () => { 
  return (
    <div>
      <Header>
        <Nav>
          <Button to="/">Home</Button>
          <Button to="/movies">Movies</Button>
        </Nav>
      </Header>
      <Outlet/>
    </div>
  )
}