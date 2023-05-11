import classes from './Home.module.css'
import LinkButton from '../components/UI/LinkButton'

function HomePage() {
  return (
    <div className={classes['home-container']}>
      <h1>You got the travel plans, we got the travel vans.</h1>
      <p>
        Add adventure to your life by joining the #vanlife movement. Rent the
        perfect van to make your perfect road trip.
      </p>
      <LinkButton to="vans">Find Your Van</LinkButton>
    </div>
  )
}

export default HomePage
