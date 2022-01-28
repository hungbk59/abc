import { lazy } from 'react'

const AppRoutes = [
    {
      path: '/home',
      component: lazy(() => import('../../views/Home'))
    },
    {
      path: '/error',
      component: lazy(() => import('../../views/Error')),
      layout: 'BlankLayout'
    },
    {
      path: '/search',
      component: lazy(() => import('../../views/search'))
    }
  ]

export default AppRoutes