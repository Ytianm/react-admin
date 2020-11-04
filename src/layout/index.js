import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from './Header'

const Layout = props => {
    return (
        <React.Fragment>
            <Header/>
            {renderRoutes(props.route.routes)}
        </React.Fragment>
    )
}

export default Layout