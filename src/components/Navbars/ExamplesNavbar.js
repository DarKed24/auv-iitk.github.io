import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import auvlogomini from "../../assets/img/logos/logo_v1.32.png";
import "./ExamplesNavbar.css";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  UncontrolledDropdown,
} from "reactstrap";

const TEAM_LINKS = [
  { to: "/team", label: "Overview" },
  { to: "/mechanical", label: "Mechanical" },
  { to: "/electrical", label: "Electrical" },
  { to: "/software", label: "Software" },
];

const VEHICLE_LINKS = [
  { to: "/vehicles/atal", label: "Atal" },
  { to: "/vehicles/anahita", label: "Anahita" },
  { to: "/vehicles/varun", label: "Varun" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/auviitk/", icon: "fa-instagram", label: "Instagram" },
  { href: "https://www.facebook.com/auviitk", icon: "fa-facebook-square", label: "Facebook" },
  { href: "https://github.com/AUV-IITK", icon: "fa-github", label: "GitHub" },
];

const TEAM_PATHS = ["/team", "/mechanical", "/electrical", "/software", "/business"];

function ExamplesNavbar() {
  const { pathname } = useLocation();
  const isLanding = pathname.startsWith("/landing-page");
  const [navbarCollapse, setNavbarCollapse] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // On the landing page the bar stays in flow under the hero and only
  // frosts + fixes itself once the user has scrolled past the hero.
  useEffect(() => {
    if (!isLanding) return undefined;
    const onScroll = () => setScrolled(window.scrollY > 850);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isLanding]);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setNavbarCollapse(false);
  }, [pathname]);

  const closeNavbar = () => setNavbarCollapse(false);
  const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`);
  const linkClass = (to) => classnames("navbar-content", { active: isActive(to) });

  const wrapperClass = classnames("navbar", "custom-navbar-auv", {
    scrolled: !isLanding || scrolled,
  });

  return (
    <div className={wrapperClass}>
      <Navbar expand="xl" className="custom-navbar-auv" aria-label="Main navigation">
        <Container className="navbar-container">
          <div className="navbar-translate">
            <NavbarBrand
              to="/landing-page"
              title="Team AUV-IITK — Home"
              tag={Link}
              style={{ marginLeft: "20px", padding: "0 0" }}
              onClick={closeNavbar}
            >
              <img className="minilogo w-100" src={auvlogomini} alt="AUV-IITK logo" />
            </NavbarBrand>
            <button
              type="button"
              aria-expanded={navbarCollapse}
              aria-label="Toggle navigation"
              className={classnames("navbar-toggler u-margin-zero", {
                toggled: navbarCollapse,
              })}
              onClick={() => setNavbarCollapse((v) => !v)}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>

          <Collapse className="justify-content-end" navbar isOpen={navbarCollapse}>
            <Nav navbar className="mr-5 navigation">
              <NavItem>
                <NavLink className={linkClass("/landing-page")} to="/landing-page" tag={Link} onClick={closeNavbar}>
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={linkClass("/about-us")} to="/about-us" tag={Link} onClick={closeNavbar}>
                  About Us
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  caret
                  nav
                  href="#team"
                  id="navTeamToggle"
                  onClick={(e) => e.preventDefault()}
                  className={classnames("navbar-content", {
                    active: TEAM_PATHS.some(isActive),
                  })}
                >
                  Team
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navTeamToggle" className="dropdown-info">
                  {TEAM_LINKS.map((l) => (
                    <DropdownItem
                      key={l.to}
                      tag={Link}
                      to={l.to}
                      className="auv-dropdown"
                      onClick={closeNavbar}
                    >
                      {l.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink className={linkClass("/events")} to="/events" tag={Link} onClick={closeNavbar}>
                  Events
                </NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle
                  caret
                  nav
                  href="#vehicles"
                  id="navVehiclesToggle"
                  onClick={(e) => e.preventDefault()}
                  className={classnames("navbar-content", {
                    active: pathname.startsWith("/vehicles"),
                  })}
                >
                  Vehicles
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navVehiclesToggle" className="dropdown-info">
                  {VEHICLE_LINKS.map((l) => (
                    <DropdownItem
                      key={l.to}
                      tag={Link}
                      to={l.to}
                      className="auv-dropdown"
                      onClick={closeNavbar}
                    >
                      {l.label}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink className={linkClass("/blogs")} to="/blogs" tag={Link} onClick={closeNavbar}>
                  Blogs
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={linkClass("/contact-us")} to="/contact-us" tag={Link} onClick={closeNavbar}>
                  Contact Us
                </NavLink>
              </NavItem>

              {SOCIALS.map((s) => (
                <NavItem key={s.label}>
                  <NavLink
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={s.label}
                    aria-label={s.label}
                    style={{ textAlign: "center", color: "white" }}
                  >
                    <i className={`fa ${s.icon} nav-social`} aria-hidden="true" />
                    <p className="d-xl-none" style={{ color: "white" }}>
                      {s.label}
                    </p>
                  </NavLink>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default ExamplesNavbar;
