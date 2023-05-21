import { Outlet } from 'react-router-dom'
import HostNavigation from '../../components/host/HostNavigation'

function HostLayout() {
  return (
    <>
      <HostNavigation />
      <Outlet />
    </>
  )
}

export default HostLayout
