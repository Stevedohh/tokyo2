import { useTranslation } from "next-i18next";
import React from 'react'
import Link from "next/link";

export default function Banner({ header, page }) {
  const { t } = useTranslation();

  return (
    <>
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb mb-5 position-relative">
        <video
          autoPlay
          loop
          muted
          className="bg-video"
        >
          <source src="/assets/videos/CPU.mp4" type="video/mp4"/>
          {t('no_video')}
        </video>
        <div className="container text-center py-5 position-relative" style={{ maxWidth: 900 }}>
          <h4
            className="text-white display-4 mb-4 wow fadeInDown"
            data-wow-delay="0.1s"
          >
            {header}
          </h4>
          <ol
            className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown"
            data-wow-delay="0.3s"
          >
            <li className="breadcrumb-item">
              <Link href="/">{t('home')}</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="/about">{t('pages')}</Link>
            </li>
            <li className="breadcrumb-item active text-primary">{page}</li>
          </ol>
        </div>
      </div>
      {/* Header End */}
    </>
  )
}
