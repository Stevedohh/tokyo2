import React from 'react'
import Link from "next/link";
import Banner from './components/Banner';

export default function NotFound() {
  return (
    <>
      <Banner page="404 Page" header="404 Pages"/>

      {/* 404 Start */}
      <div style={styles.container}>
        <video autoPlay muted playsInline onCanPlayThrough={handleVideoEnd} style={styles.video}>
          <source src="/assets/videos/404.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <div style={styles.content}>
          <div className="container py-5 text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                <i
                  className="far fa-frown-open display-1 text-primary mb-4"
                  style={{ width: 80, height: 80 }}
                />
                <h1 className="display-1">404</h1>
                <h1 className="mb-4">Page Not Found</h1>
                <p className="mb-4">
                  We’re sorry, the page you have looked for does not exist in our
                  website! Maybe go to our home page or try to use a search?
                </p>
                <Link
                  className="btn btn-primary rounded-pill py-3 px-5"
                  href="/"
                >
                  Go Back To Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 404 End */}
    </>
  )
}

// Inline styles
const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
    width: '100%',
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

// Function to handle video playback
function handleVideoEnd(e) {
  e.target.pause();
}
