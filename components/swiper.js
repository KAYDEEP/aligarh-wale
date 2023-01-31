import SwiperCore, { Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import { Banner } from './banner';




const SwiperBlog =  (props) => {
  const {keyName, data } = props;
    SwiperCore.use([Autoplay])

  return (


    <Swiper
      autoplay={{
          delay:2000
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      // className='abs'
    >
        { data && data.length && data.map((item,index)=>{
          return <SwiperSlide><Banner {...item}/></SwiperSlide>
        })}
    </Swiper>

  );
};

export default SwiperBlog;