import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import VanDetailContainer from '../../components/vans/VanDetailContainer'
import Wrapper from '../../components/Layout/Wrapper'

function VanDetailPage() {
  const params = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    const fetchVanDetails = async (id) => {
      try {
        const response = await fetch(`/api/vans/${id}`)

        if (!response.ok) {
          throw new Error()
        }

        const data = await response.json()

        setVan(data.vans)
      } catch (err) {
        console.log(err)
      }
    }

    fetchVanDetails(params.vanId)
  }, [params.id])

  return (
    <Wrapper>
      &#8592;&nbsp;
      <Link
        to="/vans"
        style={{
          textUnderlineOffset: '4px',
          color: '#201F1D',
        }}
      >
        Back to all vans
      </Link>
      {van ? <VanDetailContainer van={van} /> : <h2>Loading...</h2>}
    </Wrapper>
  )
}

export default VanDetailPage
