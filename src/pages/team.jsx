import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from 'react'
import Banner from './components/Banner'
import Team from './components/Team'

export default function team() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation('common');

  return (
    <>
    <Banner page={t('team')} header={t('our_team')}/>
    <Team/>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'team',
    ])),
  },
})
