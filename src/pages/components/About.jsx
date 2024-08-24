import { useTranslation } from "next-i18next";
import React from 'react';
import Link from 'next/link'; // Импортируем компонент Link из next/link
import NewSection from './NewSection'; // Импорт нового компонента

export default function About() {
  const { t } = useTranslation('about');

  return (
      <>
        {/* Новый контент, интегрированный в About.js */}
        <NewSection/>

        {/* Секция услуг Start */}
        <div className="container-fluid bg-dark text-white py-5 bg-services">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold">{t('our_services')}</h1>
                <p className="lead">
                  {t('services_description')}
                </p>
                <div className="d-flex flex-wrap mb-4">
                  {t('services_list', { returnObjects: true }).map((service, index) => (
                      <span key={index} className="badge m-2 p-3">{service}</span>
                  ))}
                </div>
                <Link href="/services" className="btn btn-light btn-lg">
                  {t('view_pricing')}
                </Link>
              </div>
              <div className="col-lg-6">
                {/* Пустая колонка для сбалансированного размещения фонового изображения */}
              </div>
            </div>
          </div>
        </div>
        {/* Секция услуг End */}

        {/* Секция "О нас" Start */}
        <div className="container-fluid about pb-5" style={{ background: '#000000' }}>
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-xl-6 wow fadeInLeft" data-wow-delay="0.2s">
                <div className="about-item-content rounded p-5 h-100" style={{ background: '#1A1A1A' }}>
                  <h4 className="text-primary">{t('about_company')}</h4>
                  <h1 className="display-4 mb-4"
                      style={{ color: '#FFFFFF', fontWeight: '700', fontSize: '2.5rem', letterSpacing: '1px' }}>
                    {t('wide_range_protection')}
                  </h1>
                  <p style={{ color: '#CCCCCC', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}
                     dangerouslySetInnerHTML={{ __html: t('company_description_1') }}/>
                  <p style={{ color: '#CCCCCC', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    {t('company_description_2')}
                  </p>

                  <p className="text-light">
                    <i className="fa fa-check text-primary me-3"/>
                    {t('advantage_1')}
                  </p>
                  <p className="text-light">
                    <i className="fa fa-check text-primary me-3"/>
                    {t('advantage_2')}
                  </p>
                  <p className="text-light mb-4">
                    <i className="fa fa-check text-primary me-3"/>
                    {t('advantage_3')}
                  </p>
                  <Link href="/about" className="btn btn-primary rounded py-3 px-5"
                        style={{ background: 'linear-gradient(135deg, #444, #222)', color: '#fff' }}>
                    {t('learn_more')}
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="rounded p-5 h-100" style={{ background: '#1A1A1A' }}>
                  <div className="row g-4 justify-content-center">
                    <div className="col-12">
                      <div className="rounded bg-light">
                        <img
                            src="/assets/img/abouttt.jpg"
                            className="img-fluid rounded w-100"
                            alt=""
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                          <span
                              className="text-primary fs-2 fw-bold"
                              data-toggle="counter-up"
                          >
                            29
                          </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>{t('insurance_policies')}</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                          <span
                              className="text-primary fs-2 fw-bold"
                              data-toggle="counter-up"
                          >
                            22
                          </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>{t('awards')}</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                          <span
                              className="text-primary fs-2 fw-bold"
                              data-toggle="counter-up"
                          >
                            12
                          </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>{t('qualified_agents')}</h4>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="counter-item rounded p-3 h-100" style={{ background: '#333333' }}>
                        <div className="counter-counting">
                          <span
                              className="text-primary fs-2 fw-bold"
                              data-toggle="counter-up"
                          >
                            19
                          </span>
                          <span className="h1 fw-bold text-primary">+</span>
                        </div>
                        <h4 className="mb-0" style={{ color: '#FFFFFF' }}>{t('team_members')}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Секция "О нас" End */}
      </>
  );
}
