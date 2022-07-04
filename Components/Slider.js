import { Fragment } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./Slider.module.css";
import Image from "next/image";
import website from "../Assets/Images/website.png";
import Three from "../Assets/Images/360.png";
import web1 from "../Assets/Images/web1.png";
import software from "../Assets/Images/software.png";

function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
   
  };
  return (
    <Fragment>
      <div className={Styles.headerContent}>
        <div className={Styles.headerTitle}>
          <h1 className={Styles.title}>SERVICES</h1>
        </div>
      </div>

      <Slider {...settings}>
        <div className={Styles.kawan}>
          <div className={Styles.info}>
            <div className={Styles.p}>
              <h1 className={Styles.h1}>Web Development</h1>
              <p>
                Because your work is unique, we devote time to the goals you
                want to achieve. Before deciding on the best strategy for your
                success, we will investigate your company's needs, brand, and
                identity.
                
              </p>
            </div>

            <div className={Styles.img}>
              <Image src={software} alt="website" />
            </div>
          </div>
        </div>

        {/*  */}
        {/* <div className={Styles.kawan}>
          <div className={Styles.info}>
            <div className={Styles.p}>
              <h1 className={Styles.h1}>Mobile Development</h1>
              <p>
                The mobile phone development services market is growing rapidly
                In order for your work and product to be market-related, you
                need to create something that increases user mobility.
              </p>
            </div>

            <div className={Styles.img}>
              <Image src={website} />
            </div>
          </div>
        </div> */}
        {/*  */}

        <div className={Styles.kawan}>
          <div className={Styles.info}>
            <div className={Styles.p}>
              <h1 className={Styles.h1}>Virtual Reality (VR)</h1>

              <p>
                From us, you can create any world according to your work needs.
                Enter content and much more with you in VR to help your sales
                level, and immerse everyone in your new world of work on your
                mobile and desktop
              </p>
            </div>

            <div className={Styles.img}>
              <Image src={Three} />
            </div>
          </div>
        </div>

        {/*  */}

        <div className={Styles.kawan}>
          <div className={Styles.info}>
            <div className={Styles.p}>
              <h1 className={Styles.h1}>Custom Software Development</h1>
              <p>
                We offer a software development service of your own free will
                that allows you to create a custom software program. Our team of
                experts can help you create a product that is complete for your
                needs. Our services are designed to provide for each customer's
                special needs, and we are always aware of the latest software
                development trend. Our team can help you create a product that
                is both efficient and user-friendly, and we work to make sure
                your end product is of the highest quality.
              </p>
            </div>

            <div className={Styles.img}>
              <Image src={web1} />
            </div>
          </div>
        </div>


      </Slider>
    </Fragment>
  );
}

export default Slick;
