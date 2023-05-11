import LinkButton from '../components/UI/LinkButton'

import bgImg from '../assets/images/about-hero.png'
import classes from './About.module.css'

export default function AboutPage() {
  return (
    <div className={classes['about-page-container']}>
      <img src={bgImg} alt="" className={classes['about-hero-image']} />
      <div className={classes['about-page-content']}>
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className={classes['about-page-cta']}>
        <h2>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <LinkButton to="/vans">Explore our vans</LinkButton>
      </div>
    </div>
  )
}
