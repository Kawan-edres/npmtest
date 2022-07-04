import Styles from './Client.module.css'
import Image from "next/image";
import royal from '../Assets/BrandLogos/royal.jpeg'
import diorama from '../Assets/BrandLogos/diorama.jpeg'
import pillar from '../Assets/BrandLogos/pillar.jpeg'
import swift from '../Assets/BrandLogos/swift.jpeg'
import car from '../Assets/BrandLogos/car.jpeg'

const Client = () => {
  return (

    <div className={Styles.header}>

    <div className={Styles.headerContetnt}>
        <h1 className={Styles.title}>CLIENTS</h1>
        <p className={Styles.discription}>Valued PartnerShip</p>
    </div>
    
    <div className={Styles.logos}>
    <Image src={royal} alt="royal"  className={Styles.logo} width="300px" height="300px" />
    <Image src={pillar} alt="pillar"  className={Styles.logo}  width="300px" height="300px"/>
    <Image src={diorama} alt="diorama" className={Styles.logo} width="300px" height="300px"   />
    <Image src={swift} alt="swift"  className={Styles.logo} width="300px" height="300px"/>
    <Image src={car} alt="swift" className={Styles.logo} width="300px" height="300px" />


    </div>

    </div>
  )
}

export default Client