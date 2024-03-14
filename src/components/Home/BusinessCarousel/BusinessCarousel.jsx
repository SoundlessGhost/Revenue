import "swiper/css";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

const BusinessCarousel = () => {
  return (
    <>
      <div className="ml-[580px] -mt-[400px]">
        <div>
          <Swiper
            grabCursor={true}
            effect={"creative"}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="w-[800px] h-[500px] rounded-md"
                src="https://images.unsplash.com/photo-1474403078171-7f199e9d1335?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVzaW5lc3MlMjBtYW4lMjB1c2luZyUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[800px] h-[500px] rounded-md"
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGJ1c2luZXNzJTIwbWFuJTIwdXNpbmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="w-[800px] h-[500px] rounded-md"
                src="https://plus.unsplash.com/premium_photo-1661377072722-6aa82b786c1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGJ1c2luZXNzJTIwbWFuJTIwdXNpbmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default BusinessCarousel;
