import React from "react";
import HomeSection from "../Components/HomeSection/HomeSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import MyWork from "../Components/MyWork/MyWork";
import Overview from '../Components/Overview/Overview';
import Contact from '../Components/Contact/Contact';

function Home() {
    return(
        <div>
        <HomeSection/>
        <Overview/>
        <MyWork/>
        {/* <AboutSection/> */}
        <Contact/>
        </div>
    );
};

export default Home;