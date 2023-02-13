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
  DashboardProfile,
  Error,
  DashboardTransactions,
} from './pages'

// Components
import { SharedLayout, DashboardSharedLayout } from './components'

// Scroll to top
import ScrollToTop from './utils/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/dashboard" element={<DashboardSharedLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="transactions" element={<DashboardTransactions />} />
          <Route path="profile" element={<DashboardProfile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
