import React from "react";
import { Cards } from "./Cards";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Destacados = () => {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Productos Destacados
      </h2>
      <div className="relative">
        <Swiper
          modules={[EffectCoverflow, Navigation, Pagination]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide className="w-[300px]">
            <Cards
              className="shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
              imageSrc="products/airpods.jpg"
              imageAlt="Airpods Pro 2da Gen."
              title="Airpods Pro 2da Gen."
              price="$53,590.00"
              originalPrice="$65,550.00"
              discount="save 20%"
              badges={["Stock ready", "Envio gratis"]}
              reviews={{
                stars: 4.5,
                count: "20k reviews",
              }}
              onBuyClick={() => console.log("Comprar Airpods")}
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="w-[300px]">
            <Cards
              className="shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
              imageSrc="products/cargador-rapido.jpg"
              imageAlt="Cargador Rápido"
              title="Cargador Rápido"
              price="$33,590.00"
              originalPrice="$35,550.00"
              discount="save 20%"
              badges={["Stock ready", "Official store"]}
              reviews={{
                stars: 4.5,
                count: "20k reviews",
              }}
              onBuyClick={() => console.log("Comprar Cargador")}
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="w-[300px]">
            <Cards
              className="shadow-lg rounded-xl transform transition-transform duration-300 hover:scale-105"
              imageSrc="products/funda-premium2.jpg"
              imageAlt="Funda Premium Magnetic"
              title="Funda Premium Magnetic"
              price="$15,590.00"
              originalPrice="$18,550.00"
              discount="save 20%"
              badges={["Stock ready", "Official store"]}
              reviews={{
                stars: 4.5,
                count: "20k reviews",
              }}
              onBuyClick={() => console.log("Comprar Funda")}
            />
          </SwiperSlide>
        </Swiper>

        {/* Flechas de navegación */}
        <div className="custom-prev absolute top-1/2 left-2 transform -translate-y-1/2 cursor-pointer z-10 bg-black text-white font-bold  w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 transition duration-500">
          &lt;
        </div>
        <div className="custom-next absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer z-10 bg-black text-white font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-gray-600 transition duration-500">
          &gt;
        </div>

        {/* Paginación personalizada */}
        <div className="custom-pagination mt-4 flex justify-center space-x-2"></div>
      </div>
    </div>
  );
};
