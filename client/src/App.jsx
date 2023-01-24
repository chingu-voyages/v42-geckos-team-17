// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Home } from './pages'

// Components
import { SharedLayout } from './components'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
