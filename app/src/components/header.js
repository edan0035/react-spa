import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import mountNavMenu, { hideMobileNav } from "../js/nav_menu";

const Header = () => {
  const location = useLocation()

  useEffect(() => {
    mountNavMenu()
    // hideMobileNav() // Hide nav-bar whenever going to new routes
  }, [])

  useEffect(() => {
    hideMobileNav() // Hide nav-bar whenever going to new routes
  }, [location])


  return (
      <header className="header">
        <h1 className="header-title">TAPPEN BJRÖRSARED</h1>
        <nav className="header-nav">
          <NavLink to="/">GRILL</NavLink>
          <NavLink to="/pizzeria">PIZZERIA</NavLink>
          <NavLink to="/tjanster">TJÄNSTER</NavLink>
          <NavLink to="/om">OM</NavLink>
          <NavLink to="/kontakt">KONTAKT</NavLink>
          <NavLink to="/extra">EXTRA</NavLink>
        </nav>
      </header>
  )
}

export default Header