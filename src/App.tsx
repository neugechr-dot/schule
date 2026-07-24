import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Schule from "./pages/Schule"
import Team from "./pages/Team"
import Organisation from "./pages/Organisation"
import Jubilaeum from "./pages/Jubilaeum"
import Bildungsgaenge from "./pages/Bildungsgaenge"
import BildungsgangDetail from "./pages/BildungsgangDetail"
import Angebote from "./pages/Angebote"
import Aktuelles from "./pages/Aktuelles"
import NewsDetail from "./pages/NewsDetail"
import Service from "./pages/Service"
import Kontakt from "./pages/Kontakt"
import Impressum from "./pages/Impressum"
import Datenschutz from "./pages/Datenschutz"

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
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
          <Route path="/schule/team" element={<Team />} />
          <Route path="/schule/organisation" element={<Organisation />} />
          <Route path="/schule/125-jahre" element={<Jubilaeum />} />
          <Route path="/bildungsgaenge" element={<Bildungsgaenge />} />
          <Route path="/bildungsgaenge/:slug" element={<BildungsgangDetail />} />
          <Route path="/angebote" element={<Angebote />} />
          <Route path="/aktuelles" element={<Aktuelles />} />
          <Route path="/aktuelles/:slug" element={<NewsDetail />} />
          <Route path="/service" element={<Service />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
