import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
import Banner from './components/Banner'
import Service from './components/Service'
import Testimonials from './components/Testimonials'

export default function services() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common');

  return (
   <>
    <Banner page={t('service')} header={ t('our_services') }/>
    <Service/>
    <Testimonials/>
   </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'service', 'testimonials'
    ])),
  },
})

