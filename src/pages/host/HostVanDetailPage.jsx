import { useOutletContext } from 'react-router-dom'
import { capitalize } from '../../utils'
import useFetch from '../../hooks/useFetch'

import classes from './HostVanDetailPage.module.css'

function HostVanDetailPage() {
  const van = useOutletContext()
  // const { vanId } = useParams()

  // let van
  // const { data } = useFetch(`/api/host/vans/${vanId}`)

  // if (data) {
  //   van = data.vans[0]
  // }

  return (
    <>
      {van ? (
        <section className={classes.detail}>
          <h4 className={classes.name}>
            Name: <span>{van.name}</span>
          </h4>
          <h4>
            Category: <span>{capitalize(van.type)}</span>
          </h4>
          <h4>
            Description: <span>{van.description}</span>
          </h4>
          <h4>
            Visibility: <span>Public</span>
          </h4>
        </section>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default HostVanDetailPage
