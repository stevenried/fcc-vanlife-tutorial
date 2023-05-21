import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import './server'

import RootLayout from './pages/Root'
import HomePage from './pages/Home'
import AboutPage from './pages/About'
import VansPage from './pages/vans/Vans'
import VanDetailPage from './pages/vans/VanDetail'

import './App.css'
import IncomePage from './pages/host/Income'
import ReviewsPage from './pages/host/Reviews'
import DashBoard from './components/host/DashBoard'
import HostLayout from './pages/host/Host'
import HostVansPage from './pages/host/HostVans'
import HostVanDetailPage from './pages/host/HostVanDetailPage'
import HostVanLayout from './pages/host/HostVanLayout'
import HostVanPricingPage from './pages/host/HostVanPricing'
import HostVanPhotosPage from './pages/host/HostVanPhotos'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RootLayout />,
//     children: [
//       { path: '/', element: <HomePage /> },
//       { path: '/about', element: <AboutPage /> },
//       { path: '/vans', element: <VansPage /> },
//       { path: '/vans/:vanId', element: <VanDetailPage /> },
//     ],
//   },
// ])

function App() {
  // return <RouterProvider router={router} />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vans" element={<VansPage />} />
          <Route path="vans/:vanId" element={<VanDetailPage />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<DashBoard />} />
            <Route path="income" element={<IncomePage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="vans" element={<HostVansPage />} />
            <Route path="vans/:vanId" element={<HostVanLayout />}>
              <Route index element={<HostVanDetailPage />} />
              <Route path="pricing" element={<HostVanPricingPage />} />
              <Route path="photos" element={<HostVanPhotosPage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
