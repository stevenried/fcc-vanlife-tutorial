import { Outlet } from 'react-router-dom'
import Footer from '../components/Layout/Footer'
import MainHeader from '../components/Layout/MainHeader'

function RootLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default RootLayout
