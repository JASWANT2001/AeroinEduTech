import React, { useEffect, useRef } from "react";

function IndustryAcademia() {
  const carouselRef = useRef(null);

  // Array of logos
  const logos = [
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/mgr_logo.avif", alt: "MGR University" },
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/cusat_logo.png?updatedAt=1731906916529", alt: "CUSAT" },
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/lpu_logo.png?updatedAt=1731906916386", alt: "LPU" },
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/hicet_logo.png?updatedAt=1731906916387", alt: "HICET" },
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/vit_logo.png?updatedAt=1731906920675", alt: "VIT" },
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/CU_logo.png?updatedAt=1731906915971", alt: "CU University" },
    { src: "https://ik.imagekit.io/cjh0dpnmu/Partners%20Content/kct_logo.avif?updatedAt=1731906916563", alt: "KCT University" },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    let currentScroll = 0;
    const logoWidth = carousel.firstChild.offsetWidth; // Assuming all logos have the same width
    const totalWidth = logoWidth * logos.length;

    const interval = setInterval(() => {
      currentScroll += logoWidth;

      if (currentScroll >= totalWidth) {
        // Reset scroll for infinite loop effect
        currentScroll = 0;
      }

      carousel.style.transform = `translateX(-${currentScroll}px)`;
    }, 2000); // Pause and scroll every 2 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [logos.length]);

  return (
    <section className="collaboration-carousel">
      <div className="container">
        <h2 className="text-center">Industry Academia</h2>
        <div className="carousel-wrapper">
          <div className="carousel-items" ref={carouselRef}>
            {logos.map((logo, index) => (
              <div key={index} className="carousel-icon-box text-center p-2">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="img-fluid"
                  style={{
                    maxHeight: "80%",
                    maxWidth: "75%",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default IndustryAcademia;
