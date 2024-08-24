import { useTranslation } from "next-i18next";
import Link from 'next/link';

export default function Blog() {
  const { t } = useTranslation('blog');

  return (
    <>
      {/* Priorities Start */}
      <div className="container-fluid priorities py-5" style={{ background: '#000000' }}>
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: 800 }}>
            <h4
              className="text-primary"
              style={{
                background: 'linear-gradient(135deg, #333333, #000000)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('priorities.title')}
            </h4>
            <h1
              className="display-4 mb-4"
              style={{
                background: 'linear-gradient(135deg, #666666, #111111)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('priorities.subtitle')}
            </h1>
          </div>
          <div className="row g-4">
            {t('priorities.items', { returnObjects: true }).map((priority, index) => (
              <div key={index} className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
                <div className="priority-item rounded p-4" style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid',
                  borderImage: `linear-gradient(135deg, #FFC300, #FF5733) 1`
                }}>
                  <div className="priority-video mb-3">
                    <video
                      src={priority.video}
                      className="img-fluid"
                      autoPlay
                      loop
                      muted
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                  <h4 className="text-light">{priority.title}</h4>
                  <p className="text-light">
                    {priority.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Priorities End */}

      {/* Blog Start */}
      <div className="container-fluid blog py-5" style={{ background: '#000000' }}>
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
              {t('blog.title')}
            </h4>
            <h1
              className="display-4 mb-4"
              style={{
                background: 'linear-gradient(135deg, #666666, #111111)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {t('blog.subtitle')}
            </h1>
            <p className="mb-0 text-light">
              {t('blog.description')}
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {t('blog.posts', { returnObjects: true }).map((post, index) => (
              <div key={index} className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay={`${0.2 * (index + 1)}s`}>
                <div className="blog-item bg-dark text-light rounded">
                  <div className="blog-img">
                    <img
                      src={post.image}
                      className="img-fluid rounded-top w-100"
                      alt={post.title}
                    />
                    <div className="blog-category py-2 px-4 text-light bg-primary">
                      <span>{post.category}</span>
                    </div>
                  </div>
                  <div className="blog-content p-4">
                    <div className="blog-comment d-flex justify-content-between mb-3">
                      <div className="small">
                        <span className="fa fa-user text-primary" /> {post.author}
                      </div>
                      <div className="small">
                        <span className="fa fa-calendar text-primary" /> {post.date}
                      </div>
                      <div className="small">
                        <span className="fa fa-comment-alt text-primary" /> {post.comments}
                      </div>
                    </div>
                    <a href="#" className="h4 d-inline-block mb-3 text-light">
                      {post.title}
                    </a>
                    <p className="mb-3">
                      {post.description}
                    </p>
                    <Link href="/blog_detail" className="btn text-primary">
                      {t('read_more')} <i className="fa fa-arrow-right" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Blog End */}
    </>
  );
}
