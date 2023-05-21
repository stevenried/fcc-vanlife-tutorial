import { useOutletContext } from 'react-router-dom'

function HostVanPricingPage() {
  const van = useOutletContext()
  return <h3>${van.price}/day</h3>
}

export default HostVanPricingPage
