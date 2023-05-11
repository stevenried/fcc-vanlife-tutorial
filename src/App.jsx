import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import VansPage from './pages/Vans'

import './App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/about', element: <AboutPage /> },
      { path: '/vans', element: <VansPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
