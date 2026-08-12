import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import PageTransition from '@/components/PageTransition'
import Preloader from '@/components/Preloader'
import CustomCursor from '@/components/CustomCursor'
import Home from '@/pages/Home'
import Photography from '@/pages/Photography'
import StoryDetail from '@/pages/StoryDetail'
import Films from './pages/Films'
import FilmDetail from '@/pages/FilmDetail'
import About from '@/pages/About'
import Journal from './pages/Journal'
import JournalArticle from '@/pages/JournalArticle'
import Enquire from '@/pages/Enquire'
import NotFound from '@/pages/NotFound'

export default function App() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navigation transparentOverHero={isHome} />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/photography" element={<PageTransition><Photography /></PageTransition>} />
          <Route path="/photography/:slug" element={<PageTransition><StoryDetail /></PageTransition>} />
          <Route path="/films" element={<PageTransition><Films /></PageTransition>} />
          <Route path="/films/:slug" element={<PageTransition><FilmDetail /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/stories" element={<PageTransition><Journal /></PageTransition>} />
          <Route path="/journal/:slug" element={<PageTransition><JournalArticle /></PageTransition>} />
          <Route path="/enquire" element={<PageTransition><Enquire /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  )
}
