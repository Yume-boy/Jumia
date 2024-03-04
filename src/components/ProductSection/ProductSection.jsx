import './ProductSection.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Mousewheel, FreeMode, Scrollbar } from 'swiper/modules';
import { useWindowSize } from "@uidotdev/usehooks";



const ProductSection = (props) => {

  const [cardData, setCardData] = useState(props.data)
    const size = useWindowSize()
  const render2 = cardData.map((card,idx) => {
      return (
          <SwiperSlide key={idx} className='content'>
               
          <div className='content tol'>
              <div><img src={card.imageUrl} /></div>
              <div className='products'>
              <div style={{width:'100%'}}><p className='p1'>{card.name}</p></div>
              <p className='p2'>{card.newPrice} <br /><span className='p3'>{card.oldPrice}</span></p>
              </div>
              
              
              </div>    
          </SwiperSlide>
      )
  })
  return (
    <div className="my-3">
      <div className="">
      
        <div className=" cover">
        <div className='card-text-1 d-flex justify-content-between px-2' style={{backgroundColor: `${props.color}`, Color: `${props.color1}`}}>
                <h4>{props.left}</h4>
                <h4 className='see-all'>{props.Right}</h4>
            </div>
          <Swiper
        slidesPerView={size.width < 1034 ? 3 : 6}
        spaceBetween={10}
        mousewheel={{
          enabled: true,
          forceToAxis: true
        }}
        freeMode={true}
        scrollbar={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Mousewheel, FreeMode, Scrollbar]}
        className="mySwiper"
        
      >
        {render2}
      </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ProductSection