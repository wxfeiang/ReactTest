import Login from '@/containers/Login'
import Base from '@/layouts/base'
import { Router } from 'oh-router'


export interface Meta {
  role?: ('admin' | 'superAdmin')[]
  menu?: {
    name: string
    path: string
  }
}

export const router = new Router<Meta>({
  middlewares: [
    // new LoginCheckMiddleware(),
    // new FetchUserMiddleware(),

  ],
  routes: [
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/',
      name: 'base',
      element: <Base />,
      children: [],
    },
    {
      path: '*',
      element: '404',
    },
  ],
})

// const permissionRoutes: RouteObject<Meta>[] = [
//   {
//     index: true,
//     element: '首页',
//     meta: {
//       menu: {
//         name: '首页',
//         path: '/',
//       },
//     },
//   },
//   {
//     path: '/user-manage',
//     element: <UserManage />,
//     meta: {
//       role: ['superAdmin'],
//       menu: {
//         name: '用户管理',
//         path: '/user-manage',
//       },
//     },
//   },
//   {
//     path: '/book-manage',
//     element: <BookManage />,
//     meta: {
//       menu: {
//         name: '图书管理',
//         path: '/book-manage',
//       },
//     },
//   },
// ]

