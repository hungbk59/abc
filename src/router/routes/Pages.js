import { lazy } from 'react'

const PagesRoutes = [
  {
    path: '/pages/login',
    component: lazy(() => import('../../views/pages/authentication/LoginV1')),
    layout: 'BlankLayout',
    meta: {
        authRoute: true
      }
  },
  {
    path: '/pages/register',
    component: lazy(() => import('../../views/pages/authentication/RegisterV1')),
    layout: 'BlankLayout'
  },
  {
    path: '/pages/forgot-password',
    component: lazy(() => import('../../views/pages/authentication/ForgotPasswordV1')),
    layout: 'BlankLayout'
  }
//   {
//     path: '/pages/reset-password-v1',
//     component: lazy(() => import('../../views/pages/authentication/ResetPasswordV1')),
//     layout: 'BlankLayout'
//   },
]

export default PagesRoutes
