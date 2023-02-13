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
  DashboardAccounts,
  DashboardStats,
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
          <Route path="home" element={<DashboardHome />} />
          <Route path="transactions" element={<DashboardTransactions />} />
          <Route path="profile" element={<DashboardProfile />} />
          <Route path="stats" element={<DashboardStats />} />
          <Route path="accounts" element={<DashboardAccounts />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
