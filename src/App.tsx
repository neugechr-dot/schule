import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Schule from "./pages/Schule"
import Bildungsgaenge from "./pages/Bildungsgaenge"
import Aktuelles from "./pages/Aktuelles"
import Kontakt from "./pages/Kontakt"
import Impressum from "./pages/Impressum"
import Datenschutz from "./pages/Datenschutz"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schule" element={<Schule />} />
          <Route path="/bildungsgaenge" element={<Bildungsgaenge />} />
          <Route path="/aktuelles" element={<Aktuelles />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
