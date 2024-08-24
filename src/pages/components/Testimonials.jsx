import { useTranslation } from "next-i18next";
import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script"; // Добавляем правильный импорт

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Testimonials = () => {
  const { t } = useTranslation('testimonials');

  useEffect(() => {
    const loadCarousel = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        await import("owl.carousel");

        $(document).ready(function () {
          $(".slider-carousel1").owlCarousel({
            items: 2,
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
            responsiveClass: true,
            responsive: {
              0: {
                items: 1
              },
              576: {
                items: 1
              },
              768: {
                items: 1
              },
              992: {
                items: 2
              },
              1200: {
                items: 2
              }
            }
          });
        });
      }
    };

    loadCarousel();
  }, []);

  return (
      <>
        <Head>
          <title>Testimonials</title>
        </Head>
        <div className="container-fluid slider pb-5">
          <div className="container pb-5 d-block">
            <div className="owl-carousel slider-carousel1">
              {Array.isArray(t('testimonials', { returnObjects: true })) && t('testimonials', { returnObjects: true }).map((testimonial, index) => (
                  <div key={index} className="slider-item rounded me-4">
                    <div className="row g-0">
                      <div className="col-md-4 col-lg-4 col-xl-3">
                        <div className="h-100">
                          <img
                              src={`/assets/img/testimonial-${index + 1}.jpg`}
                              className="img-fluid h-100 rounded"
                              style={{ objectFit: "cover" }}
                              alt={`Slide ${index + 1}`}
                          />
                        </div>
                      </div>

                      <div className="col-md-8 col-lg-8 col-xl-9">
                        <div className="d-flex flex-column my-auto text-start p-4">
                          <h4 className="mb-0">{testimonial.name}</h4>
                          <p className="mb-3">{testimonial.role}</p>
                          <div className="d-flex text-primary mb-3">
                            {[...Array(5)].map((star, i) => (
                                <i
                                    key={i}
                                    className={`fas fa-star ${i < testimonial.rating ? '' : 'text-body'}`}
                                ></i>
                            ))}
                          </div>
                          <p className="mb-0">&quot;{testimonial.feedback}&quot;</p>
                        </div>
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

export default Testimonials;
