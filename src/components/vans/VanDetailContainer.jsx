import LinkButton from '../UI/LinkButton'
import TypeLabel from './TypeLabel'
import classes from './vanDetailContainer.module.css'

function VanDetailContainer({ van }) {
  return (
    <div className={classes['van-detail-container']}>
      <img src={`${van.imageUrl}`} alt="" />
      <TypeLabel type={van.type} />
      <h2>{van.name}</h2>
      <span>${van.price}/day</span>
      <p>{van.description}</p>
      <LinkButton className={classes.cta}>Rent this van</LinkButton>
    </div>
  )
}

export default VanDetailContainer
