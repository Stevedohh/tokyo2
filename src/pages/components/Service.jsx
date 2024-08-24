import { useTranslation } from "next-i18next";
import Link from "next/link"; // Импортируем Link из next/link

export default function Service() {
    const { t } = useTranslation('service');

    return (
        <>
            {/* Service Start */}
            <div
                className="container-fluid portfolio py-5"
                style={{ background: '#000000' }}
            >
                <div className="container py-5">
                    <div
                        className="text-center mx-auto pb-5 wow fadeInUp"
                        data-wow-delay="0.2s"
                        style={{ maxWidth: 800 }}
                    >
                        <h4
                            className="text-primary"
                            style={{
                                background: 'linear-gradient(135deg, #333333, #000000)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {t('portfolio.section_title')}
                        </h4>
                        <h1
                            className="display-4 mb-4"
                            style={{
                                background: 'linear-gradient(135deg, #666666, #111111)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {t('portfolio.section_subtitle')}
                        </h1>
                        <p className="mb-0 text-light">
                            {t('portfolio.section_description')}
                        </p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {t('portfolio.projects', { returnObjects: true }).map((project, index) => (
                            <div
                                key={index}
                                className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
                                data-wow-delay={`${0.2 * (index + 1)}s`}
                            >
                                <div className="portfolio-item bg-dark text-light rounded shadow-sm">
                                    <div className="portfolio-img position-relative">
                                        <video
                                            src={project.video}
                                            className="img-fluid rounded-top w-100"
                                            autoPlay
                                            muted
                                            loop
                                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className="portfolio-content p-4">
                                        <h4 className="mb-3 text-light">{project.title}</h4>
                                        <p className="mb-4 text-light">
                                            {project.description}
                                        </p>
                                        <Link href="/contact" className="btn btn-outline-light rounded py-2 px-4">
                                            {t('portfolio.view_more')}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.8s">
                            <Link href="#" className="btn btn-outline-light rounded py-3 px-5">
                                {t('portfolio.view_more')}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End */}
        </>
    );
}
