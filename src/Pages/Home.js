import React from "react";
import HomeSection from "../Components/HomeSection/HomeSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import MyWork from "../Components/MyWork/MyWork";
import Overview from '../Components/Overview/Overview';

function Home() {
    return(
        <div>
        <HomeSection/>
        <Overview/>
        <MyWork/>
        <AboutSection/>
        </div>
    );
};

export default Home;