import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import css from "./Home.module.css";
import 'swiper/css';
import london from "../../assets/countries/london.jpg";
import prague from "../../assets/countries/prague.jpg";
import paris from "../../assets/countries/paris.jpg";
import Prague2 from "../../assets/countries/Prague2.jpg";
import eifelTower from "../../assets/countries/eifelTower.jpg";
import manarolaItaly from "../../assets/countries/manarolaItaly.jpg";
import germany from "../../assets/countries/germany.jpg";

export const Home = () => {
  const subTitles = [
    {
      img: prague,
      p: "Прага",
      key: 1,
    },
    {
      img: london,
      p: "Лондон",
      key: 2,
    },
    {
      img: paris,
      p: "Париж",
      key: 3,
    },
    {
      img: Prague2,
      p: "Прага",
      key: 4,
    },
    {
      img: eifelTower,
      p: "Эйфелевая Париж",
      key: 5,
    },
    {
      img: manarolaItaly,
      p: "Манарола, Италия",
      key: 6
    },
    {
      img: germany,
      p: "Германия",
      key: 7
    }
  ];
  const proud = [
    {
      img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/qlpz1enihecg9zryoaua",
      p: "Природой",
      key: 1
    },
    {
      img: "https://jeepclubspb.ru/wp-content/uploads/2016/10/d95951909358962a8a5eebbc1e33c7d4_orig.jpg",
      p: "Автомобилями",
      key: 2,
    },
    {
      img: "https://pivo.by/images/2018/01/german-beer.jpg",
      p: "Пивом",
      key: "3"
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Idaho_Wine_.jpg/1200px-Idaho_Wine_.jpg",
      p: "Вином",
      key: 4
    },
    {
      img: "http://www.unipack.ru/user_files/file27538.jpg",
      p: "Коньяком",
      key: 5
    },
    {
      img: "https://fenix.today/uploads/images/cover/Coronavirus-european-medicine-fenix-today.jpg",
      p: "Учеными",
      key: 6
    },
    {
      img: "https://avatars.dzeninfra.ru/get-zen_doc/1118263/pub_5b057be8256d5ce5fa3e5a1f_5b0588cd77d0e6adf1ed921e/scale_1200",
      p: "Красивыми девушками",
      key: 7,
    },
    {
      img: "http://sun9-54.userapi.com/impg/uSx1etz-eyL1ZNAQlquajUn51DXL5fIdYQap3g/sQno4l0wO2A.jpg?size=604x483&quality=96&sign=0beab31701a816665e4a0071e8ff2ae5&type=album",
      p: "Красивыми парнями",
      key: 8
    },
    {
      img: "https://upload.educationindex.co.uk/img/unilocthumbnail/1688020730.png",
      p: "Образованием",
      key: 9
    }
  ];

  return (
    <>
      <section className={`container ${css.homePage_wrapper}`}>
        <div className={css.homePage_left}>
          <h1>Зарубежная Европа</h1>
          <img src='https://quizizz.com/media/resource/gs/quizizz-media/quizzes/5ea09b09-e558-454b-adcc-3f31a6180157?w=600&h=600' alt='europe map' />
        </div>
        <span></span>
        <h1>Европа в картинках</h1>
        <section className={css.slider_wrapper}>
          <Swiper
            slidesPerView={1}
            scrollbar={{
              hide: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
            speed={2000}
            loop={true}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {subTitles.map((item) => (
              <SwiperSlide key={item.key}>
                <div className={css.slider_card}>
                  <img style={{ width: "700px", height: "400px", margin: "0 auto" }} src={item.img} alt={item.p} />
                  <p style={{ margin: "0 auto", textAlign: "center" }}>{item.p}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <span></span>
        <h1>Чем славится Европа?</h1>
        <section className={css.slider_wrapper}>
          <Swiper
            slidesPerView={1}
            scrollbar={{
              hide: false,
            }}
            modules={[Autoplay, EffectFade]}
            className="mySwiper"
            speed={2000}
            loop={true}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {proud.map((item) => (
              <SwiperSlide key={item.key}>
                <div className={css.slider_card}>
                  <img style={{ width: "700px", height: "400px", margin: "0 auto" }} src={item.img} alt={item.p} />
                  <p style={{ margin: "0 auto", textAlign: "center" }}>{item.p}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </>
  )
}
