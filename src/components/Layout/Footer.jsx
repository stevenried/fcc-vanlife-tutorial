import classes from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>&#169;{new Date().getFullYear()} #VANLIFE</p>
    </footer>
  )
}

export default Footer
