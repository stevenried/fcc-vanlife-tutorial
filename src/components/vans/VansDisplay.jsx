import VanCard from './VanCard'
import Wrapper from '../Layout/wrapper'

import classes from './VansDisplay.module.css'

function VansDisplay({ vans }) {
  return (
    <>
      <div className={classes['vans-display']}>
        {vans.map((van) => (
          <VanCard key={van.id} van={van} />
        ))}
      </div>
    </>
  )
}

export default VansDisplay
