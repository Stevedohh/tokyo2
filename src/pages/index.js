import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import Features from "./components/Features";
import About from "./components/About";
import Service from "./components/Service";
import FAQs from "./components/FAQs";
import Blog from "./components/Blog";
import Team from "./components/Team";

const Home = () => (
  <div className="d-block">
    <Slider/>
    <Features/>
    <About/>
    <Service/>
    <FAQs/>
    <Blog/>
    <Team/>
    <Testimonials/>
  </div>
)

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'ru', [
      'common',
      'navbar',
      'footer',
      'new_section',
      'about',
      'faq',
      'team',
      'blog',
      'testimonials',
      'service',
      'slider',
      'features'
    ])),
  },
})

export default Home
