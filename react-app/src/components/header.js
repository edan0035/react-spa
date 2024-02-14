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
          <NavLink to="/react-spa">GRILL</NavLink>
          <NavLink to="/react-spa/pizzeria">PIZZERIA</NavLink>
          <NavLink to="/react-spa/tjanster">TJÄNSTER</NavLink>
          <NavLink to="/react-spa/om">OM</NavLink>
          <NavLink to="/react-spa/kontakt">KONTAKT</NavLink>
          <NavLink to="/react-spa/extra">EXTRA</NavLink>
        </nav>
      </header>
  )
}

export default Header