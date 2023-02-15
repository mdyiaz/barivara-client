import SignUp from '../page/login/SignUp'
import Login from './../page/login/Login'
const { createBrowserRouter } = require('react-router-dom')
const { default: MainLayout } = require('../layout/main/MainLayout')
const { default: Home } = require('../page/home/Home')

const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/sign-up',
        element: <SignUp />,
      },
      {
        path: '/contactus',
        
        
      }
    ],
  },
])

export default routes
