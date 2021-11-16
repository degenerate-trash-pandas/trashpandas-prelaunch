import React, { useState } from "react";

import type {NextPage} from 'next'
import {FullPage, Slide} from 'react-full-page';
import InitialScreen from "../components/InitialScreen/InitialScreen";
import DescriptionScreen from "../components/DescriptionScreen/DescriptionScreen";
import MenuScreen from "../components/MenuScreen/MenuScreen";
import TheGameScreen from "../components/TheGameScreen/TheGameScreen";
import FreensScreen from "../components/FreenScreen/FreensScreen";
import FairLaunchScreen from "../components/FairLaunchScreen/FairLaunchScreen";
import {createRef} from "react";
import { useRouter } from "next/router";

const Home: NextPage = () => {
    const fullPageRef = createRef<any>();
    const [binOpen, setBinOpen] = useState(false);
    const openMenu = () => {
        const menu = document.getElementById("magic-menu")
        menu?.classList.add("active")
        setBinOpen(true)
    }
    const closeMenu = () => {
        const menu = document.getElementById("magic-menu")
        menu?.classList.remove("active")
        setBinOpen(false)
    }
    const router = useRouter()
    const {slide} = router.query
    return (
        <FullPage initialSlide={slide ? Number.parseInt("" + slide) : 0} className={"full-page-container"} ref={fullPageRef}>
            <div className="top-icons-menu">
                <img src="/assets/Logo.png"/>
                {binOpen ? (
                    <img onClick={closeMenu} src="/assets/Bin_Open.png"/>
                ) : (
                    <img onClick={openMenu} src="/assets/Bin_Closed.png"/>
                )}
            </div>
            <Slide>
                <InitialScreen />
                <div className="white-line down"></div>
            </Slide>
            <Slide style={{position: "relative"}}>
                <DescriptionScreen />
                <div className="white-line up"></div>
            </Slide>
            <Slide>
                <FreensScreen />
            </Slide>
            <Slide>
                <TheGameScreen />
            </Slide>
            <Slide>
                <FairLaunchScreen />
            </Slide>
            <div id={"magic-menu"}>
                <MenuScreen fullPageRef={fullPageRef} onMenuItem={() => setBinOpen(false)}/>
            </div>
        </FullPage>
    )
}

export default Home
