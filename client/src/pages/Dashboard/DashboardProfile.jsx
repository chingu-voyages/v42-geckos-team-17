import React from 'react'

// Routing
import { useNavigate } from 'react-router-dom'

// Locale storage
import { removeUserFromLocalStorage } from '../../utils/localStorage'

// Components
import ProfileForm from '../../components/dashboard/ProfileForm'

// Styled Components
import { DashboardProfileContainer } from '../../styles/dashboard/profile/ProfileStyles'
import { SecondaryButton } from '../../styles/ButtonStyles'

function DashboardProfile() {
  // Routing
  const navigate = useNavigate()

  // Handle sign out
  const handleSignOut = () => {
    removeUserFromLocalStorage()
    navigate('/signin')
  }
  return (
    <DashboardProfileContainer>
      <ProfileForm />
      <SecondaryButton onClick={handleSignOut}>Sign out</SecondaryButton>
    </DashboardProfileContainer>
  )
}

export default DashboardProfile
