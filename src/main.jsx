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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeroSection />
    <DayCounter />
    <Entourage />
    <WeddingTimeline />
    <Location />
    <AttireInspiration />
    <RSVP />
  </StrictMode>,
)
