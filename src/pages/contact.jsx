import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useState } from 'react';
import Banner from './components/Banner';

export default function Contact() {
  const { t } = useTranslation('contact');

  const [ formData, setFormData ] = useState({
    userName: '',
    userEmail: '',
    userPhone: '',
    userProject: '',
    userSubject: '',
    userMessage: '',
  });

  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ errorMessage, setErrorMessage ] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    setErrorMessage('');

    try {
      const response = await fetch('https://formspree.io/f/mwpennpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.userName,
          email: formData.userEmail,
          phone: formData.userPhone,
          project: formData.userProject,
          subject: formData.userSubject,
          message: formData.userMessage,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          userName: '',
          userEmail: '',
          userPhone: '',
          userProject: '',
          userSubject: '',
          userMessage: '',
        });
      } else {
        setErrorMessage(t('section.form.error'));
      }
    } catch (error) {
      setErrorMessage(t('section.form.error'));
    }
  };

  return (
    <>
      <Banner page={t('banner.page')} header={t('banner.header')}/>

      {/* Contact Start */}
      <div className="container-fluid contact bg-black py-5">
        <div className="container py-5">
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: 800 }}
          >
            <h4 className="text-primary">{t('section.title')}</h4>
            <h1 className="display-4 mb-4 text-white">
              {t('section.subtitle')}
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-xl-6">
              <div className="video-container d-flex justify-content-center">
                <div className="video-wrapper">
                  <video
                    autoPlay
                    loop
                    muted
                    className="img-fluid w-100 rounded"
                    style={{ color: 'transparent', width: '100%', height: 'auto' }}
                  >
                    <source src="/assets/videos/cont.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight" data-wow-delay="0.4s">
              <div>
                <h4 className="text-primary">{t('section.form.title')}</h4>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    {Object.keys(formData).map((field, index) => (
                      <div key={index} className={`col-lg-12 col-xl-${index < 4 ? '6' : '12'}`}>
                        <div className="form-floating">
                          <input
                            type={field === 'userEmail' ? 'email' : field === 'userPhone' ? 'phone' : 'text'}
                            className="form-control border-0"
                            id={field}
                            name={field}
                            placeholder={t(`section.form.fields.${field}`)}
                            value={formData[field]}
                            onChange={handleChange}
                            required={field === 'userName' || field === 'userEmail' || field === 'userMessage'}
                          />
                          <label htmlFor={field}>{t(`section.form.fields.${field}`)}</label>
                        </div>
                      </div>
                    ))}
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">
                        {t('section.form.submit')}
                      </button>
                    </div>
                    {isSubmitted && (
                      <div className="col-12 mt-3">
                        <p className="text-success">{t('section.form.success')}</p>
                      </div>
                    )}
                    {errorMessage && (
                      <div className="col-12 mt-3">
                        <p className="text-danger">{errorMessage}</p>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div>
                <div className="row g-4">
                  {t('section.contact_info', { returnObjects: true }).map((info, index) => (
                    <div
                      key={index}
                      className="col-md-6 col-lg-3 wow fadeInUp"
                      data-wow-delay={`${0.2 * (index + 1)}s`}
                    >
                      <div className="contact-add-item">
                        <div className="contact-icon text-primary mb-4">
                          <i className={`${info.icon} fa-2x`}/>
                        </div>
                        <div>
                          <h4 className="text-white">{info.title}</h4>
                          <p className="mb-0 text-white">{info.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-12 wow fadeInUp" data-wow-delay="0.2s">
              <div className="rounded">
                <iframe
                  className="rounded w-100"
                  style={{ height: 400 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common', 'navbar', 'footer', 'contact'
    ])),
  },
})
