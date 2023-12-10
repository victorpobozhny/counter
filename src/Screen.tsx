import React from "react";

type ScreenType = {
    count: number
    maxState: number
}

export const Screen:  React.FC<ScreenType> = ({count, maxState})=> {

    return (
        <div className={`screen ${count==maxState? 'red' : ''}`}>
            {count}
        </div>
    )
}