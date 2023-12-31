import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Nav() {
  return (
    <Navbar
      links={[
        <Link key={1} className="nav-link" to="/about">
          About Me
        </Link>,
        <Link key={2} className="nav-link" to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className="nav-link" to="/contact">
          Contact
        </Link>,
        <Link key={4} className="nav-link" to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}

