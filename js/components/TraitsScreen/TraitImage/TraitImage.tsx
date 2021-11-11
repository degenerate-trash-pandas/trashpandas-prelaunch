import React from "react";

export interface TraitSource {
    url?: string
    type?: string
    rarity?: string | undefined
    title: string
}

function capitalize(title: string) {
    const lower = title.match(/[A-Z][a-z]+/g)?.join(" ").toLowerCase();
    return title.charAt(0).toUpperCase() + lower?.slice(1);
}

export const TraitImage = (props: TraitSource) => {
    return (
        <div>
            <img src={props.url} />
            <p>{capitalize(props.title)}</p>
        </div>
    )
}