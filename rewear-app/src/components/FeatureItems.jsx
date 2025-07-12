import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css/effect-fade";

const featuredItems = [
  {
    id: 1,
    title: "Vintage Leather Jacket",
    desc: "Classic and timeless. Gently worn and in great condition.",
    img: "/jacket.jpg",
    alt: "Vintage Leather Jacket"
  },
  {
    id: 2,
    title: "Boho Handbag",
    desc: "Colorful, handmade bag perfect for casual outings.",
    img: "/bag.jpg",
    alt: "Boho Style Handbag"
  },
  {
    id: 3,
    title: "Summer Floral Dress",
    desc: "Light and breezy — perfect for the warm season.",
    img: "/dress.jpg",
    alt: "Summer Floral Dress"
  },
  {
    id: 4,
    title: "Men’s Running Shoes",
    desc: "Barely used, high-performance running shoes.",
    img: "/shoes.jpg",
    alt: "Men’s Black Running Shoes"
  },
];

const FeatureItems = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Featured Items
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-6xl mx-auto"
      >
        {featuredItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4">
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-52 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FeatureItems;
