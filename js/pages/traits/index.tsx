import React, { createRef } from "react";

import type { NextPage } from 'next'
import { FullPage, Slide } from 'react-full-page';
import TraitsScreen from "../../components/TraitsScreen/TraitsScreen";
import { useRouter } from "next/router";

const Traits: NextPage = () => {
    const fullPageRef = createRef<any>();
    const router = useRouter()
    return (
        <FullPage scrollMode={"normal"} className={"full-page-container"} ref={fullPageRef}>
            <div className="top-icons-menu">
                <img onClick={() => {
                    router.push('/')
                }} src="/assets/Logo.png" />
                <img src="/assets/Bin_Closed.png" />
            </div>
            <Slide>
                <TraitsScreen />
            </Slide>
        </FullPage>
    )
}

export default Traits
