import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/2.jpg"
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

const About = () => {
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero-mid" heroImg={AboutImg} title="" btnClass="hide"/>
        <AboutUs/>
        <Footer/>
        </>
    );
};

export default About;