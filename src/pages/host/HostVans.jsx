import { useState, useEffect } from 'react'
import HostVanCard from '../../components/host/HostVanCard'
import Wrapper from '../../components/Layout/Wrapper'
import classes from './HostVans.module.css'

function HostVansPage() {
  const [vans, setVans] = useState([])

  useEffect(() => {
    const fetchVans = async () => {
      try {
        const response = await fetch('/api/host/vans')

        if (!response.ok) {
          throw new Error()
        }

        const data = await response.json()
        setVans(data.vans)
      } catch (err) {
        console.log(err)
      }
    }

    fetchVans()
  }, [])

  return (
    <>
      <Wrapper>
        <h1>Your listed vans</h1>
        <ul className={classes['van-list']}>
          {vans.length > 0 ? (
            vans.map((van) => <HostVanCard key={van.id} van={van} />)
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </Wrapper>
    </>
  )
}

export default HostVansPage
