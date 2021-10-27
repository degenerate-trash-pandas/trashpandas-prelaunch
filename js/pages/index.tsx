import type {NextPage} from 'next'
import {FullPage, Slide} from 'react-full-page';
import InitialScreen from "../components/InitialScreen/InitialScreen";
import DescriptionScreen from "../components/DescriptionScreen/DescriptionScreen";
import MenuScreen from "../components/MenuScreen/MenuScreen";
import TheGameScreen from "../components/TheGameScreen/TheGameScreen";
import FreensScreen from "../components/FreenScreen/FreensScreen";
import FairLaunchScreen from "../components/FairLaunchScreen/FairLaunchScreen";
import {createRef, useRef} from "react";

const Home: NextPage = () => {
    const fullPageRef = createRef<any>();
    const goToNextSlide = () => {
        fullPageRef.current.scrollNext()
    }
    const goToMenu = () => {
        fullPageRef.current.scrollToSlide(2)
    }
    return (
        <FullPage ref={fullPageRef}>
            <Slide>
                <InitialScreen goToMenu={goToMenu} goNext={goToNextSlide}/>
            </Slide>
            <Slide>
                <DescriptionScreen goToMenu={goToMenu} goNext={goToNextSlide}/>
            </Slide>
            <Slide>
                <MenuScreen fullPageRef={fullPageRef}/>
            </Slide>
            <Slide>
                <FreensScreen goToMenu={goToMenu} goNext={goToNextSlide}/>
            </Slide>
            <Slide>
                <TheGameScreen goToMenu={goToMenu} goNext={goToNextSlide}/>
            </Slide>
            <Slide>
                <FairLaunchScreen goToMenu={goToMenu}/>
            </Slide>
        </FullPage>
    )
}

export default Home
