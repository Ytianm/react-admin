import Components from '../config/componentExport'

const Routes = [
    {
        path: '/home',
        component: Components['Home'],
        routes: [
            {
                path: '/home/detail',
                component: Components['Detail']
            }
        ]
    }
]

export default Routes