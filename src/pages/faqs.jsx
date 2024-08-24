import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
import Banner from './components/Banner'
import FAQs from './components/FAQs'


export default function faqs() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common');

  return (
    <>
    <Banner page={t('faqs')} header={t('faq')} />
    <FAQs/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'faq'
    ])),
  },
})
