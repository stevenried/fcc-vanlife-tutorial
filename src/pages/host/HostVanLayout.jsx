import { useEffect, useState } from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'

import Wrapper from '../../components/Layout/Wrapper'

import HostVanDetailHeader from '../../components/host/HostVanDetailHeader'
import classes from './HostVanLayout.module.css'

function HostVanLayout() {
  const [van, setVan] = useState()
  const params = useParams()

  useEffect(() => {
    const loadVan = async () => {
      try {
        const response = await fetch(`/api/host/vans/${params.vanId}`)

        if (!response.ok) {
          throw new Error()
        }

        const data = await response.json()

        setVan(data.vans[0])
      } catch (err) {
        console.log(err)
      }
    }

    loadVan()
  }, [])

  return (
    <Wrapper>
      &#8592;&nbsp;
      <Link to=".." className={classes.return} relative="path">
        Return to all vans
      </Link>
      {van ? (
        <div className={classes.layout}>
          <HostVanDetailHeader van={van} />
          <Outlet context={van} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  )
}

export default HostVanLayout
