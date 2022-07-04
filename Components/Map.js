import Styles from './Map.module.css'
import  Facebook from '../Assets/Contact/facebook.svg'
import  LinkedIN from '../Assets/Contact/in.svg'
import  Twitter from '../Assets/Contact/twitter.svg'


import Image from 'next/image'

const Map = () => {
  return (
    <div className={Styles.mapContainer}>

    <div className={Styles.mapContent}>
    <h1 className={Styles.title}>GET IN TOUCH</h1>
    {/* <p className={Styles.contact}>kawanedres211@gmail.com</p> */}
    {/* <p className={Styles.contact}>www.facebook.com</p> */}
    <p className={Styles.contact}>+964 0750 384 9912</p>
    <div>
   
   <div className={Styles.icons}>
   <a className={Styles.icon} href="https://www.facebook.com/DevSpace.krd" target="_blank"><Image src={Facebook} alt="facebook"  /> </a>
   <a className={Styles.icon} href="https://www.linkedin.com/company/devspace-software/" target="_blank"> <Image src={LinkedIN} alt="facebook"  /></a>
   </div>

        
        </div>
    <iframe className={Styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2252.2530784878722!2d44.06292415634415!3d36.197097056842225!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x400723ca5e32e567%3A0xf3209c85b0f6d78a!2sDevSpace%20for%20software%20solutions!5e0!3m2!1sen!2siq!4v1656410102852!5m2!1sen!2siq" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>

    </div>
  )
}

export default Map