import React from "react";
import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";

const Main = () => {
    return (
        <div className="main">
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
        <Destination />
        <Trip />
        <Footer />
        </>
        </div>
    );
};

export default Main;