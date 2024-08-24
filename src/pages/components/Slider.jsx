import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useEffect } from "react";
import Script from "next/script";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const loadCarousel = async () => {
  if (typeof window !== "undefined") {
    const $ = (await import("jquery")).default;
    await import("owl.carousel");

    $(document).ready(function () {
      const carousel = $(".slider-carousel");
      if (carousel.length) {
        carousel.owlCarousel({
          items: 1,
          loop: true,
          nav: true,
          dots: false,
          autoplay: true,
          autoplayTimeout: 5000,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>',
          ],
        });
      }
    });
  }
};

const Slider = () => {
  const { t } = useTranslation('slider');

  useEffect(() => {
    loadCarousel();
  }, []);

  return (
    <>
      <div
        className="container-fluid slider pt-5 pb-5"
        style={{ background: '#000000' }}
      >
        <div className="container d-block pt-5 mt-3">
          <div className="owl-carousel slider-carousel">
            {t('slides', { returnObjects: true }).map((slide, index) => (
              <div key={index} className="slider-item">
                <div className="container-fluid">
                  <div className="row g-4 align-items-center">
                    {index % 2 === 0 ? (
                      <>
                        <div className="col-lg-7 animated fadeInLeft">
                          <div className="text-sm-center text-md-start">
                            <h4 className="text-uppercase text-white fw-bold mb-4">
                              {slide.title}
                            </h4>
                            <h1 className="display-1 text-white mb-4">
                              {slide.subtitle}
                            </h1>
                            <p className="mb-5 text-white fs-5">
                              {slide.description}
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-start flex-shrink-0 mb-4">
                              {slide.buttons.map((button, btnIndex) => (
                                <Link
                                  key={btnIndex}
                                  className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                                  href="/contact"
                                  style={{ background: 'linear-gradient(135deg, #444, #222)', color: '#fff' }}
                                >
                                  {button.text}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-5 animated fadeInRight">
                          <div className="carousel-video" style={{ objectFit: "cover" }}>
                            <video
                              className="video-fluid w-100"
                              width={800}
                              height={600}
                              autoPlay
                              muted
                              loop
                            >
                              <source src={slide.video} type="video/mp4"/>
                            </video>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="col-lg-5 animated fadeInRight">
                          <div className="carousel-video" style={{ objectFit: "cover" }}>
                            <video
                              className="video-fluid w-100"
                              width={800}
                              height={600}
                              autoPlay
                              muted
                              loop
                            >
                              <source src={slide.video} type="video/mp4"/>
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        </div>
                        <div className="col-lg-7 animated fadeInLeft">
                          <div className="text-sm-center text-md-end">
                            <h4 className="text-white text-uppercase fw-bold mb-4">
                              {slide.title}
                            </h4>
                            <h1 className="display-1 text-white mb-4">
                              {slide.subtitle}
                            </h1>
                            <p className="mb-5 text-white fs-5">
                              {slide.description}
                            </p>
                            <div className="d-flex justify-content-center justify-content-md-end flex-shrink-0 mb-4">
                              {slide.buttons.map((button, btnIndex) => (
                                <a
                                  key={btnIndex}
                                  className="btn btn-primary rounded py-3 px-4 px-md-5 ms-2"
                                  href={button.link}
                                  style={{ background: 'linear-gradient(135deg, #444, #222)', color: '#fff' }}
                                >
                                  {button.text}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/lib/owlcarousel/owl.carousel.min.js"
        strategy="afterInteractive"
      />
    </>
  );
};

export default Slider;
