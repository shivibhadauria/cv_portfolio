import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper/modules";

// Import your certificate and experience images
import cert1 from "../assets/g1.jpg";
import cert2 from "../assets/g2.jpg";
import cert3 from "../assets/g3.jpg";
import cert4 from "../assets/g4.jpg";
import exp1 from "../assets/IL.png"; 
import exp2 from "../assets/exp2.png";// Imported experience image
import companyLogo from "../assets/logoo.jpeg"; // Company logo to overlay on top of experience image
import unio from "../assets/unio.jpg";
const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Sample data for experiences
  const experiences = [
    {
      id: 1,
      company: "BIZ Next 3S LOGIC",
      duration: "July - August 2024",
      about: "Worked as a Backend Developer, handling database queries and API development.",
      stack: "SQL (MySQL), C#",
      certImage: exp1,
      logo: companyLogo,// Use exp1 for experience image
    },
    {
      id: 2,
      company: "JIC STARTUP - UNIO RENTALS",
      duration: "November 2023 - January 2024",
      about: "Led the development of a web-based application for PG and rental services.",
      stack: "React.js, Node.js",
      certImage: exp2,
      logo: unio, // Use exp1 for experience image
    },
  ];

  return (
    <div className="m-5 lg:m-20 p-5 bg-[url('./assets/bg.jpeg')] rounded-lg shadow-lg animate-floatIn">
      <h2 className="text-4xl font-bold text-center mb-10 text-white">COLLECTIONS</h2>

      {/* Certification Section */}
      <section className="m-5 lg:m-20 p-5 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-bold mb-10 text-white">Certifications</h2>
        <Swiper
  effect={"coverflow"}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={3}
  spaceBetween={0}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  }}
  pagination={{ clickable: true }}
  navigation={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
  className="w-full max-w-3xl mx-auto"
>
  <SwiperSlide className="scale-75" onClick={() => openModal(cert1)}>
    <img src={cert1} alt="Certificate 1" className="rounded-lg cursor-pointer" />
  </SwiperSlide>
  <SwiperSlide className="scale-100" onClick={() => openModal(cert2)}>
    <img src={cert2} alt="Certificate 2" className="rounded-lg cursor-pointer" />
  </SwiperSlide>
  <SwiperSlide className="scale-75" onClick={() => openModal(cert3)}>
    <img src={cert3} alt="Certificate 3" className="rounded-lg cursor-pointer" />
  </SwiperSlide>
  <SwiperSlide className="scale-75" onClick={() => openModal(cert4)}>
    <img src={cert4} alt="Certificate 4" className="rounded-lg cursor-pointer" />
  </SwiperSlide>
</Swiper>

        {/* Modal for enlarged certification image */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="relative">
              <button
                className="absolute top-0 right-0 m-4 text-white text-3xl"
                onClick={closeModal}
              >
                &times;
              </button>
              <img
                src={selectedImage}
                alt="Selected Image"
                className="max-w-full max-h-screen rounded-lg"
              />
            </div>
          </div>
        )}
      </section>

      {/* Experience Section */}
      <section className="m-5 lg:m-20 p-5 rounded-lg shadow-lg">
        <h2 className="text-4xl text-center font-bold mb-10 text-white">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="relative p-5 bg-[url('./assets/nnbg.jpeg')] rounded-lg shadow-md  transition-all duration-300 transform hover:scale-105"
              onClick={() => openModal(exp.certImage)} // Open modal with experience image
            >
              {/* Experience Image with Logo Overlay */}
              <div className="relative">
  {/* Experience Image */}
  <img
    src={exp.certImage}
    alt={`${exp.company} Experience`}
    className="rounded-lg w-full h-40 object-cover blur-md" // Always blurred
  />

  {/* Opaque Logo Overlay Centered */}
  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={exp.logo}
      alt={`${exp.company} Logo`}
      className="w-20 h-20 opacity-70"
    />
  </div>
</div>

              {/* Company Info */}
              <div className="mt-5">
                <h3 className="text-2xl text-white font-bold">{exp.company}</h3>
                <p className="text-gray-500 text-white">{exp.duration}</p>
                <p className="mt-3 text-white">{exp.about}</p>
                <p className="mt-2 text-white font-semibold">Stack Used: {exp.stack}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
