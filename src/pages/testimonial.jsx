import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
import Testimonials from './components/Testimonials'
import Banner from './components/Banner'

export default function testimonial() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common');

  return (
    <>
      <Banner page={t('testimonial')} header={t('our_testimonial')}/>
      <Testimonials/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'testimonials',
    ])),
  },
})
