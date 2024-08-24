import { useTranslation } from "next-i18next";
import React from 'react';
import Image from 'next/image'; // Импортируем компонент Image из next/image

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
      <>
        {/* Начало футера */}
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.2s">
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-xl-9">
                <div className="mb-5">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-6 col-xl-5">
                      <div className="footer-item">
                        <a href="index.html" className="p-0">
                          <h3 className="text-light">
                            <i className=""/> {t('company_name')}
                          </h3>
                          <Image
                              src="/assets/img/logo.png"
                              alt="Логотип"
                              width={50}
                              height={50}
                          />
                        </a>
                        <p className="text-light mb-4">
                          {t('company_description')}
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-3">
                      <div className="footer-item">
                        <h4 className="text-light mb-4">{t('useful_links')}</h4>
                        <a href="#" className="text-light"><i className="fas fa-angle-right me-2"/> {t('about_us')}</a><br/>
                        <a href="#" className="text-light"><i className="fas fa-angle-right me-2"/> {t('services')}</a><br/>
                        <a href="#" className="text-light"><i className="fas fa-angle-right me-2"/> {t('contact_us')}</a>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-4">
                      <div className="footer-item">
                        <h4 className="mb-4 text-light">{t('instagram')}</h4>
                        <div className="row g-3">
                          <div className="col-4">
                            <div className="footer-instagram rounded">
                              <Image
                                  src="/assets/img/instagram-footer-1.png"
                                  className="img-fluid w-100"
                                  alt=""
                                  width={100}
                                  height={100}
                                  style={{ objectFit: 'cover' }}
                              />
                              <div className="footer-search-icon">
                                <a
                                    href="/assets/img/6.png"
                                    data-lightbox="footerInstagram-1"
                                    className="my-auto"
                                >
                                  <i className="fas fa-link text-light"/>
                                </a>
                              </div>
                            </div>
                          </div>
                          {/* Остальные изображения */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-5" style={{ borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
                  <div className="row g-0">
                    <div className="col-12">
                      <div className="row g-4">
                        <div className="col-lg-6 col-xl-4">
                          <div className="d-flex">
                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                              <i className="fas fa-map-marker-alt fa-2x"/>
                            </div>
                            <div>
                              <h4 className="text-light">{t('address')}</h4>
                              <p className="mb-0 text-light">{t('address_detail')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <div className="d-flex">
                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                              <i className="fas fa-envelope fa-2x"/>
                            </div>
                            <div>
                              <h4 className="text-light">{t('email')}</h4>
                              <p className="mb-0 text-light">{t('email_detail')}</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-xl-4">
                          <div className="d-flex">
                            <div className="btn-xl-square bg-primary text-white rounded p-4 me-4">
                              <i className="fa fa-phone-alt fa-2x"/>
                            </div>
                            <div>
                              <h4 className="text-light">{t('phone')}</h4>
                              <p className="mb-0 text-light">{t('phone_detail')}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3">
                <div className="footer-item">
                  <h4 className="text-light mb-4">{t('newsletter')}</h4>
                  <p className="text-light">
                    {t('newsletter_description')}
                  </p>
                  <div className="newsletter-input w-100 mt-3">
                    <input
                        type="text"
                        placeholder={t('newsletter_placeholder')}
                    />
                    <button type="button">
                      <i className="fas fa-paper-plane"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
}
