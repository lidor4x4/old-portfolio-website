/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Home.css";
import TypeAnimation from 'react-type-animation';
import Button from "react-bootstrap/Button";


const Home = () => {
    return (
        <div>
            <section className="section-1">
                <div className="container-home">
                    <h1 className="home-page-title">Hello!</h1>
                    <div className="home-page-subtitle"><TypeAnimation cursor={false} repeat={Infinity} sequence={["My name is Lidor and I'm a front-end web developer", 1000, '']} wrapper="h3"/></div>
                    <img src={require('./home_assets/home-page-top.jpg')} alt="Home" className="home-top-img" />
                    <Button className="explore-my-projects-button" variant="outline-success"><a href="#" className="a-tag-explore-button">Explore my projects</a></Button>
                </div>
            </section>
            <section className="section-2">
                <div>
                    
                </div>
            </section>
        </div>
    );
}

export default Home;