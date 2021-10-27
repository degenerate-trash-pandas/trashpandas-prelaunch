import React from "react";

import type {NextPage} from 'next'
import {FullPage, Slide} from 'react-full-page';
import InitialScreen from "../components/InitialScreen/InitialScreen";
import DescriptionScreen from "../components/DescriptionScreen/DescriptionScreen";
import MenuScreen from "../components/MenuScreen/MenuScreen";
import TheGameScreen from "../components/TheGameScreen/TheGameScreen";
import FreensScreen from "../components/FreenScreen/FreensScreen";
import FairLaunchScreen from "../components/FairLaunchScreen/FairLaunchScreen";
import {createRef} from "react";

const Home: NextPage = () => {
    const fullPageRef = createRef<any>();
    // const goToNextSlide = () => {
    //     const menu = document.getElementById("magic-menu")
    //     menu?.classList.remove("active")
    //     fullPageRef.current.scrollNext()
    // }
    const noop = () => {}
    const goToMenu = () => {
        const menu = document.getElementById("magic-menu")
        menu?.classList.add("active")
    }
    return (
        <FullPage className={"full-page-container"} ref={fullPageRef}>
            <Slide>
                <InitialScreen goToMenu={goToMenu} goNext={noop}/>
                <div className="white-line down"></div>
            </Slide>
            <Slide style={{position: "relative"}}>
                <DescriptionScreen goToMenu={goToMenu} goNext={noop}/>
                <div className="white-line up"></div>
            </Slide>
            <Slide>
                <FreensScreen goToMenu={goToMenu} goNext={noop}/>
            </Slide>
            <Slide>
                <TheGameScreen goToMenu={goToMenu} goNext={noop}/>
            </Slide>
            <Slide>
                <FairLaunchScreen goToMenu={goToMenu}/>
            </Slide>
            <div id={"magic-menu"}>
                <MenuScreen fullPageRef={fullPageRef}/>
            </div>
        </FullPage>
    )
}

export default Home
