import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HeroSection from './Components/HeroSection.jsx'
import DayCounter from './Components/DayCounter.jsx'
import Entourage from './Components/Entourage.jsx'
import WeddingTimeline from './Components/WeddingTimeline.jsx'
import Location from './Components/Location.jsx'
import AttireInspiration from './Components/AttireInspiration.jsx'
import RSVP from './Components/RSVP.jsx'
import Gifts from './Components/Gifts.jsx'
import FAQs from './Components/FAQs.jsx'
import Footer from './Components/Footer.jsx'
import RSVPForm from './Components/RSVPForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    <DayCounter />
    {/* <Entourage /> */}
    <WeddingTimeline />
    <Location />
    <AttireInspiration />
    {/* <RSVP /> */}
    <Gifts />
    <FAQs />
    <RSVPForm />
    <Footer />
  </StrictMode>,
)
