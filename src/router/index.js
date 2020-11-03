import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import routes from './routes'
import Components from '../config/componentExport'
const querystring = require('querystring')

export default () => {
    return (
        <Router>
            <Switch>
                {
                    routes.map(r => {
                        // 路由对应组件
                        const Component = Components[r.component]
                        return <Route
                            key={r.key || r.path}
                            path={r.path}
                            render={props => {
                                console.log(props);
                                const reg = /\?(\S*)/g
                                window.location.href.match(reg)
                                const queryParams = querystring.parse(RegExp.$1)
                                const params = {
                                    ...props,
                                    query: queryParams || {}
                                }
                                return <Component {...params} />
                            }}
                        />
                    })
                }
            </Switch>
        </Router>
    )
}