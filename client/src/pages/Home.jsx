import React from 'react'
import { PrimaryButton, SecondaryButton } from '../styles/ButtonStyles'
import { TextLink } from '../styles/LinkStyles'

function Home() {
  return (
    <div>
      <h1>H1 Okane</h1>
      <h2>H2 Okane</h2>
      <h3>H3 Okane</h3>
      <p>P Okane</p>
      <PrimaryButton>Primary button</PrimaryButton>
      <SecondaryButton>Secondary button</SecondaryButton>
      <PrimaryButton small>Small</PrimaryButton>
      <SecondaryButton small>Small</SecondaryButton>
      <TextLink>Text link</TextLink>
      <TextLink small>Small link</TextLink>
    </div>
  )
}

export default Home
