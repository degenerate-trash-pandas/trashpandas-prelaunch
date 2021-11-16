import React, { createRef, useState } from "react";

import type { NextPage } from 'next'
import { FullPage, Slide } from 'react-full-page';
import TraitsScreen from "../../components/TraitsScreen/TraitsScreen";
import { useRouter } from "next/router";
import MenuScreen from "../../components/MenuScreen/MenuScreen";

const Traits: NextPage = () => {
    const fullPageRef = createRef<any>();
    const router = useRouter()

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
    return (
        <FullPage scrollMode={"normal"} className={"full-page-container"} ref={fullPageRef}>
            <div className="top-icons-menu">
                <img onClick={() => {
                    router.push('/')
                }} src="/assets/Logo.png" />
                {binOpen ? (
                    <img onClick={closeMenu} src="/assets/Bin_Open.png" />
                ) : (
                    <img onClick={openMenu} src="/assets/Bin_Closed.png" />
                )}
            </div>
            <Slide>
                <TraitsScreen />
            </Slide>
            <div id={"magic-menu"}>
                <MenuScreen fullPageRef={fullPageRef} onMenuItem={() => setBinOpen(false)} goToMain={true} />
            </div>
        </FullPage>
    )
}

export default Traits
