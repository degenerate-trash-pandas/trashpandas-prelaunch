import type {NextPage} from 'next'
import {FullPage, Slide} from 'react-full-page';
import InitialScreen from "../components/InitialScreen/InitialScreen";
import DescriptionScreen from "../components/DescriptionScreen/DescriptionScreen";
import MenuScreen from "../components/MenuScreen/MenuScreen";
import TheGameScreen from "../components/TheGameScreen/TheGameScreen";

const Home: NextPage = () => {
    return (
        <FullPage>
            <Slide>
                <InitialScreen/>
            </Slide>
            <Slide>
                <DescriptionScreen/>
            </Slide>
            <Slide>
                <MenuScreen/>
            </Slide>
            <Slide>
                <TheGameScreen/>
            </Slide>
        </FullPage>
    )
}

export default Home
