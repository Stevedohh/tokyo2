import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Banner from "./components/Banner";

export default function AboutUs() {
  const { t } = useTranslation('about_us');

  return (
    <>
      <Banner page={t('banner.page')} header={t('banner.header')}/>
      <section className="py-12 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
              <div className="single-post">
                <div className="mb-5 text-center animate__animated animate__fadeInDown">
                  <h2 className="text-3xl font-bold mt-2 text-gray-100">
                    {t('content.title')}
                  </h2>
                  <div className="text-gray-400 mt-4">
                      <span className="text-sm uppercase tracking-wide mr-3">
                        {t('content.company')}
                      </span>
                    <span className="text-sm uppercase tracking-wide">
                        {t('content.founded')}
                      </span>
                  </div>
                  <div
                    className="relative mt-5 h-96 overflow-hidden bg-cover bg-center rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
                    style={{ backgroundImage: "url('/assets/img/company.jpg')" }}
                  >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <h2
                      className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white z-10">
                      {t('content.image_caption')}
                    </h2>
                  </div>
                </div>
                <div className="animate__animated animate__fadeInUp">
                  <div className="text-lg text-gray-300">
                    <p className="mb-6">
                      {t('content.description_1')}
                    </p>
                    <h2 className="text-2xl font-bold mb-4 text-gray-100">
                      {t('content.why_choose_us')}
                    </h2>
                    <p className="mb-6">
                      {t('content.description_2')}
                    </p>
                    <blockquote className="border-l-4 border-blue-500 pl-4 mb-6">
                      <p className="text-xl italic font-semibold text-gray-300">
                        {t('content.quote')}
                      </p>
                    </blockquote>

                    <h2 className="text-2xl font-bold mb-4 text-gray-100">
                      {t('content.achievements')}
                    </h2>
                    <ul className="list-disc list-inside mb-6 text-gray-400">
                      {t('content.achievements_list', { returnObjects: true }).map((achievement, index) => (
                        <li key={index} className="mb-2">{achievement}</li>
                      ))}
                    </ul>

                    <h3 className="text-xl font-bold mb-4 text-gray-100">
                      {t('content.case_studies')}
                    </h3>
                    {t('content.projects', { returnObjects: true }).map((project, index) => (
                      <div key={index}
                           className="mb-4 p-4 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300">
                        <h4 className="font-bold text-gray-100">{project.title}</h4>
                        <p className="text-gray-400">{project.task}</p>
                        <p className="text-gray-400">{project.solution}</p>
                        <p className="text-gray-400">{project.result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex my-5 animate__animated animate__fadeIn">
                <div className="mr-4">
                  <img
                    alt=""
                    src="./assets/img/avatar3.webp"
                    className="rounded-full w-20 h-20 border-4 border-gray-700"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-100 mb-2">
                    {t('content.team.title')}
                  </h4>
                  <p className="text-gray-400">
                    {t('content.team.description')}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="sidebar sidebar-right mt-5">
                <div className="sidebar-wrap p-4 bg-gray-800 shadow-lg rounded-lg">
                  <div className="text-center mb-5">
                    <img
                        src="/assets/img/bg.ai_17.png"
                        alt="user"
                        className="rounded-full mx-auto border-4 border-gray-700"
                        style={{width: '120px', height: '170px'}}
                    />
                  </div>
                  <h4 className="text-xl font-bold text-gray-100 mb-4">
                    {t('content.sidebar.services_title')}
                  </h4>
                  <p className="text-gray-400 mb-4">
                    {t('content.sidebar.services_description')}
                  </p>
                  <ul className="list-disc list-inside mb-6 text-gray-400">
                    {t('content.sidebar.services_list', { returnObjects: true }).map((service, index) => (
                      <li key={index} className="mb-2">{service}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'blog', 'about_us'
    ])),
  },
})
