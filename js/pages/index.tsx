import type {NextPage} from 'next'
import {FullPage, Slide} from 'react-full-page';
import InitialScreen from "../components/InitialScreen/InitialScreen";
import DescriptionScreen from "../components/DescriptionScreen/DescriptionScreen";

const Home: NextPage = () => {
    return (
        <FullPage>
            <Slide>
                <InitialScreen/>
            </Slide>
            <Slide>
                <DescriptionScreen/>
            </Slide>
        </FullPage>
    )
}

export default Home
