import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
import Banner from './components/Banner'
import About from './components/About'
import Features from './components/Features'
import FAQs from './components/FAQs'
import Team from './components/Team'

function about() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common');

  return (
    <>
      <Banner page={t('about')} header={t('about_us')}/>
      <About/>
      <Features/>
      <FAQs/>
      <Team/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'about', 'new_section', 'faq', 'team', 'features'
    ])),
  },
})

export default about;
