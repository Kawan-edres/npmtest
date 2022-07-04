import Styles from './Footer.module.css'
import  Facebook from '../Assets/Contact/facebook.svg'
import  LinkedIN from '../Assets/Contact/in.svg'
import  Twitter from '../Assets/Contact/twitter.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={Styles.footer}>
    
    <div className={Styles.icons}>
   <a className={Styles.icon} href="https://www.facebook.com/DevSpace.krd" target="_blank"><Image src={Facebook} alt="facebook"  /> </a>
   <a className={Styles.icon} href="https://www.linkedin.com/company/devspace-software/" target="_blank"> <Image src={LinkedIN} alt="facebook"  /></a>
   </div>
   <p className={Styles.copyRight}>©2022 By DEV Space Teams official website</p>
    </div>

  )
}

export default Footer