/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css"
import {motion} from "framer-motion"
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return(
        <nav className="page-navbar">
            <div className="nav-wrapper">
                <ul>
                    <motion.li whileHover={{scale:1.1}}><a href="#welcome-section" className="a-tag-navabr">Home</a></motion.li>
                    <motion.li whileHover={{scale:1.1}}><a href="#projects-section" className="a-tag-navabr">Projects</a></motion.li>
                    <motion.li whileHover={{scale:1.1}}><a href="#about-me-section" className="a-tag-navabr">About</a></motion.li>
                    <motion.li><Button variant="outline-primary contact-button"><a className="a-tag-navbar-contact-me-button" href="https://wa.link/8n2rfs">Contact Me</a></Button></motion.li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;