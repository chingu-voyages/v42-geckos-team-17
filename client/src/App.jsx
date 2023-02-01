// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import { Home, About, Contact, SignIn, SignUp } from './pages'

// Components
import { SharedLayout } from './components'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
