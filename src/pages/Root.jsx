import { Outlet } from 'react-router-dom'
import MainHeader from '../components/MainHeader'

function RootLayout() {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
