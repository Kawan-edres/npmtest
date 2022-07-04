import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Styles from './Slider.module.css';
import Image from 'next/image'


const ContentSlider = (props) => {
  return (
    <div className={Styles.kawan}>
    <div className={Styles.info}>
   
   <div className={Styles.p}><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum, reiciendis ullam facilis nulla sapiente omnis eveniet delectus, maiores, voluptate magni excepturi praesentium aut ipsa consequuntur totam impedit minus eum.
   Nisi, sit natus. Alias dolorem quas unde, nulla, repudiandae non laboriosam voluptatibus similique quos placeat at dolore nobis, officia eaque impedit excepturi iusto. Voluptatum laborum voluptas fuga sed soluta consequatur!</p></div>
  
     <Image  className={Styles.img} src={props.img} />

     </div>

  </div>
  )
}

export default ContentSlider