import Components from '../config/componentExport'

const Routes = [
    {
        path: '/',
        component: Components['Layout'],
        routes: []
    },
    {
        path: '/home',
        component: Components['Home']
    }
]

export default Routes