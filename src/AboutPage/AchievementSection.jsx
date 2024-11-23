import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: 'AWS Space Accelerator, India',
      description:
        'Aeroin EduTech is honored to be selected for the prestigious AWS Space Accelerator in India. This program recognizes our innovative efforts in revolutionizing space education. With this recognition, we continue our commitment to advancing space exploration and learning through cutting-edge technology.',
      imageUrl:
        'src/AboutPage/Image/AWS - AEROIN.webp',
    },
    {
      title: 'DeepTech Startup Award, Pondicherry',
      description:
        'Aeroin is proud to have won the prestigious DeepTech Startup Award at the Pondicherry Startup Conference. This award celebrates our ongoing mission to drive innovation in space technology, showcasing our dedication to advancing the aerospace industry.',
      imageUrl:
        'https://ik.imagekit.io/cjh0dpnmu/Achievement%20Content/Pondy%20startup%20conference.JPG',
    },
    {
      title: 'National Seminar at Dr. MGR University',
      description:
        'Our CEO had the privilege of addressing attendees at the National Seminar at Dr. MGR University in Chennai. The session explored the latest innovations in space technology and their impact on education, reinforcing Aeroin EduTech\'s commitment to empowering future space professionals.',
      imageUrl:
        'src/AboutPage/Image/mgr_award.webp',
    },
    {
      title: 'Guest Speaker at KCT, Coimbatore',
      description:
        'Our CEO had the honor of being a guest speaker at Kosmorena 23, hosted by Kumaraguru College in Coimbatore. The event offered deep insights into space exploration and technology, in line with Aeroin EduTech’s mission to inspire and educate the next generation of space leaders.',
      imageUrl:
        'https://ik.imagekit.io/cjh0dpnmu/Achievement%20Content/kct_guest.webp',
    },
  ];

  const totalSlides = slides.length;

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation only happens once
    });
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section className="achievement-carousel-section">
      <div
        className="carousel-wrapper-achievement"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div
          className="carousel-container-achievement"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="carousel-slide-achievement"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              data-aos="zoom-in"
            >
              <div className="achievement-content-left">
                <div className="fixed-heading">
                  <h2>Awards & Milestones</h2>
                </div>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
              <div
                className="achievement-content-right"
                data-aos="fade-in"
                data-aos-delay="200"
              >
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  style={{
                    objectFit: index === 0 ? 'fill' : 'cover',
                    objectPosition: 'center',
                    borderRadius: '8px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <button
          className="prev-btn-achievement"
          onClick={prevSlide}
          aria-label="Previous Slide"
          data-aos="fade-up"
        >
          &#10094;
        </button>
        <button
          className="next-btn-achievement"
          onClick={nextSlide}
          aria-label="Next Slide"
          data-aos="fade-up"
        >
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default AchievementCarousel;
