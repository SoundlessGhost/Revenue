import "swiper/css";
import "swiper/css/effect-creative";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

const MainSwiper = () => {
  return (
    <>
      <div className="ml-[680px] -mt-[400px] " id="mainSwiper">
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
              id="swiperImg"
              className="w-[600px] h-[400px] rounded-md"
              src="https://images.unsplash.com/photo-1534772431209-cd73174d9593?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2l0dGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="swiperImg"
              className="w-[600px] h-[400px] rounded-md"
              src="https://media.istockphoto.com/id/1304876683/photo/im-no-where-close-to-finishing-this-deadline-tonight.webp?b=1&s=170667a&w=0&k=20&c=k5hXid8v_5_KWpK9-dgnF1wydU1tsD0apE-yOUG4AYE="
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="swiperImg"
              className="w-[600px] h-[400px] rounded-md"
              src="https://images.unsplash.com/photo-1533900298318-6b8da08a523e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFya2V0fGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="swiperImg"
              className="w-[600px] h-[400px] rounded-md"
              src="https://plus.unsplash.com/premium_photo-1664202219210-abf6ae3bdf04?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hcmtldHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              id="swiperImg"
              className="w-[600px] h-[400px] rounded-md"
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9yZXN0fGVufDB8fDB8fHww"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default MainSwiper;
