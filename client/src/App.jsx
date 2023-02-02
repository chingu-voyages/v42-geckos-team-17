// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Pages
import {
  Home,
  About,
  Contact,
  SignIn,
  SignUp,
  DashboardHome,
  Pricing,
} from './pages'

// Components
import { SharedLayout, DashboardSharedLayout } from './components'

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
          <Route path="pricing" element={<Pricing />} />
        </Route>
        <Route path="/dashboard" element={<DashboardSharedLayout />}>
          <Route index element={<DashboardHome />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
