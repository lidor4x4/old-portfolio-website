/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import TypeAnimation from 'react-type-animation';
import Button from "react-bootstrap/Button";
import CardPage from './CardPage';
import Footer from "../misc/footer"
import ScrollToTop from "react-scroll-to-top";

const Home = () => {
    return (
        <div>
             <ScrollToTop smooth viewBox="0 0 350 350" />
            <section className="section-1" id="welcome-section">
                <div className="container-home">
                    <h1 className="home-page-title">Hello!</h1>
                    <div className="home-page-subtitle"><TypeAnimation cursor={false} repeat={Infinity} sequence={["My name is Lidor and I'm a front-end web developer.", 1000, '']} wrapper="h3"/></div>
                    <img src={require('./home_assets/home-page-top.png')} alt="Home" className="home-top-img" />
                    <Button className="explore-my-projects-button" variant="outline-primary" href="#projects-section">Explore my projects</Button>
                </div>
            </section>
            <section className="section-2" id="about-me-section">
                <div className="container-about-me">
                    <h1 className="about-me-title">About Me</h1>
                    <img src={require("./home_assets/home-page-mid.png")} alt="home-page-mid-img" className="home-page-mid-img" />
                    <h4 className="about-me-text1">Hello there my name is Lidor and I'm a professional front-end web developer.</h4>
                    <h4 className="about-me-text2">I'm doing front-end web development for over three years.</h4>
                </div>
            </section>
            <section className="section-3" id="projects-section">
                <div className="container-my-projects">
                    <h1 className="my-projects-title">My Projects</h1>
                    <CardPage img="https://via.placeholder.com/800x400" cardClassName="card card1" cardTitle="Placeholder title" cardText="Placeholder text" buttonText="See project"/>
                    <CardPage img="https://via.placeholder.com/800x400" cardClassName="card card2" cardTitle="Placeholder title" cardText="Placeholder text" buttonText="See project"/>
                    <CardPage img="https://via.placeholder.com/800x400" cardClassName="card card3" cardTitle="Placeholder title" cardText="Placeholder text" buttonText="See project"/>  
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Home;