import { useState, useEffect } from 'react'
import VansDisplay from '../components/vans/VansDisplay'
import Wrapper from '../components/Layout/wrapper'

function VansPage() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const loadVans = async () => {
      try {
        const response = await fetch('/api/vans')

        if (!response.ok) {
          throw new Error()
        }

        const data = await response.json()

        setVans(data.vans)
      } catch (err) {
        console.log(err)
      }
    }

    loadVans()
  }, [])

  return (
    <Wrapper>
      <h1>Explore our van options</h1>
      <VansDisplay vans={vans} />
    </Wrapper>
  )
}

export default VansPage
