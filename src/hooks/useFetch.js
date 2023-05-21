import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url)

        if (!response.ok) {
          throw new Error()
        }

        const result = await response.json()

        setData(result)
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [url])
  return { data }
}

export default useFetch
