import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
import Banner from './components/Banner'
import Features from './components/Features'

export default  function feature() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, ready } = useTranslation('common');

  return (
    <>
     <Banner page={t('feature')} header={t('our_features')}/>
     <Features/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'features'
    ])),
  },
})
