// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Home } from './pages'

// Components
import { HeaderNav, Footer } from './components'

function App() {
  return (
    <Router>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
