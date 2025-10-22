import React from 'react'
import PrimaryContainer from './PrimaryContainer'
import SecondaryContainer from './SecondaryContainer'

const MainContainer = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <PrimaryContainer />
            <SecondaryContainer />
        </div>

    )
}

export default MainContainer