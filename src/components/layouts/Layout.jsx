import Navbar from './Navbar'
import Footer from './Footer'
import BackToTop from './BackToTop'
import SettingsPopup from './SettingsPopup'

export default function Layout({ children }) {
  return (
    <>
      <Navbar/>
      <SettingsPopup/>
      <main>
        {children}
      </main>
      <Footer/>
      <BackToTop/>
    </>
  )
}
