import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import querystring from 'querystring'

const createRoutes = (routes) => {
    return routes.map(r => {
        if (r.routes) {
            createRoutes(r.routes)
        }
        console.log('111', r);
        
        return <Route
            key={r.key || r.path}
            path={r.path}
            exact={r.exact || true}
            strict={r.strict}
            render={props => {
                const reg = /\?(\S*)/g
                window.location.href.match(reg)
                const queryParams = querystring.parse(RegExp.$1)
                const params = {
                    ...props,
                    query: queryParams || {}
                }
                if (!r.requiresAuth) {
                    return <r.component {...props} routes={r} />
                }
            }}
        />
    })
}

const Router = () => (
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
)

export default Router