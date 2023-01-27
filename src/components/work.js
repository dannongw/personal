import React, {useState, useEffect, Component} from 'react';
import {ReactComponent as WeatherSVG} from '../svg/weather.svg';
import Onework from "./onework";
import Footer from "./footer";

const Work = () => {

    return (
        <div className="h-screen mt-36">

            <h5 className="text-xl py-1 mb-12 border-t border-black" id={"work"}>Work</h5>


            <Onework name={"Weather Chatbot"} type={"Development, API"}
                     desc={"Online store to post or purchase used items. Built with Angular, Express, and MongoDB. "}
                     position="left"
                     background={require("../image/p1.png")}>University <br/> MarketPlace</Onework>

            <Onework name={"University Marketplace"} type={"Development, Full-stack"}
                     desc={"An API that can respond to natual language weather questions. built with express, mongodb, and python."}
                     position={"right"}
                     background={require("../image/p2.png")}>Weather Bot <br/> API </Onework>

            <Onework name={"Campus Event Planner"} type={"Development, Full-stack"}
                     desc={"Online event planner with interactive map. Built with React, Express, and PostgreSQL."}
                     position={"left"}
                     background={require("../image/p3.png")}>Campus <br/> Event Planner </Onework>

            <Footer></Footer>
        </div>
    )
}

export default Work;
