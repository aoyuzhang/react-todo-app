import React from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const links = [
    {
      id: 1,
      path: "/react-todo-app",
      text: "Home",
    },
    {
      id: 2,
      path: "/react-todo-app/about",
      text: "About",
    },
  ]

  return (
    <nav className="navBar">
      <ul>
        {links.map(link =>{
          return(
            <li key = {link.id}>
              <NavLink to ={link.path} activeClassName="active-link" exact>
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
