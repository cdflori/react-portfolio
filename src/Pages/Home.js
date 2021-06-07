import React from "react";
import HomeSection from "../Components/HomeSection/HomeSection";
import AboutSection from "../Components/AboutSection/AboutSection";
import MyWork from "../Components/MyWork/MyWork";

function Home() {
    return(
        <div>
        <HomeSection/>
        <MyWork/>
        <AboutSection/>
        </div>
    );
};

export default Home;