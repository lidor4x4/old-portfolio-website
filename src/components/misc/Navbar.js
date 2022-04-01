/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css"
import {motion} from "framer-motion"
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-wrapper">
                <ul>
                    <motion.li whileHover={{scale:1.1}}><a href="#" className="a-tag-navabr">Home</a></motion.li>
                    <motion.li whileHover={{scale:1.1}}><a href="#" className="a-tag-navabr">Projects</a></motion.li>
                    <motion.li whileHover={{scale:1.1}}><a href="#" className="a-tag-navabr">About</a></motion.li>
                    <motion.li><Button variant="outline-primary contact-button">Contact Me</Button></motion.li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar;