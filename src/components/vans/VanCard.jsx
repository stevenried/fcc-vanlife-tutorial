import TypeLabel from './TypeLabel'
import classes from './VanCard.module.css'

function VanCard({ van }) {
  return (
    <>
      <div className={classes['van-card']}>
        <img src={van.imageUrl} alt={`Image of our ${van.name} van.`} />
        <div className={classes.description}>
          <div className={classes['name-price']}>
            <h3>{van.name}</h3>
            <div className={classes.price}>
              <span>${van.price}</span>
              <span className={classes.day}>/day</span>
            </div>
          </div>
          <TypeLabel type={van.type} />
        </div>
      </div>
    </>
  )
}

export default VanCard
