import React, { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'

const Home = (props) => {
    useEffect(() => {
        console.log(props);

    })
    return (
        <div>
            home
            {renderRoutes(props.route.routes)}
        </div>
    )
}

export default Home