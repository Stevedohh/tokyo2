import { useTranslation } from "next-i18next";
import React from 'react';

export default function FAQs() {
  const { t } = useTranslation('faq');

  return (
    <>
      {/* FAQs Start */}
      <div className="container-fluid faq-section py-5" style={{ background: '#000000' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
            <h1 className="display-4 mb-0 text-white">
              {t('title')}
            </h1>
          </div>
          <div className="accordion" id="accordionExample">
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button bg-dark text-light border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  {t('question_1')}
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show active"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_1')}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button bg-dark text-light collapsed border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  {t('question_2')}
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_2')}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button bg-dark text-light collapsed border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  {t('question_3')}
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_3')}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingFour">
                <button
                  className="accordion-button bg-dark text-light collapsed border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  {t('question_4')}
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_4')}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingFive">
                <button
                  className="accordion-button bg-dark text-light collapsed border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  {t('question_5')}
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_5')}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingSix">
                <button
                  className="accordion-button bg-dark text-light collapsed border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  {t('question_6')}
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_6')}
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark border-0">
              <h2 className="accordion-header" id="headingSeven">
                <button
                  className="accordion-button bg-dark text-light collapsed border-0"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  {t('question_7')}
                </button>
              </h2>
              <div
                id="collapseSeven"
                className="accordion-collapse collapse"
                aria-labelledby="headingSeven"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-light">
                  {t('answer_7')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQs End */}
    </>
  );
}
