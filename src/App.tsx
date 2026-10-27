import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { About } from './pages/About'
import { Convention } from './pages/Convention'
import { Events } from './pages/Events'
import { Home } from './pages/Home'
import { Programs } from './pages/Programs'
import { Sponsors } from './pages/Sponsors'
import { Team } from './pages/Team'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="programs" element={<Programs />} />
        <Route path="convention" element={<Convention />} />
        <Route path="events" element={<Events />} />
        <Route path="team" element={<Team />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
