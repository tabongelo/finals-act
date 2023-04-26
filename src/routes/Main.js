import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

function Main (){
    return(
        <>
        <Navbar />
        <Hero 
        cName="hero"
        heroImg="https://hdqwalls.com/wallpapers/ocean-waves-at-sunset.jpg"
        title="Your Journey Starts Here"
        text="Looking for beautiful destination?"
        buttonText="Travel Ideas"
        url="/"
        btnClass="show"
        />
        <Destination/>
        <Trip/>
        <Footer/>
        </>
    );
}

export default Main;