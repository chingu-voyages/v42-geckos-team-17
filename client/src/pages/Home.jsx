import React from 'react'
// Components
import {
  Features,
  Hero,
  Downloads,
  FAQ,
  PromotionStats,
  CTA,
} from '../components'

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Downloads />
      <PromotionStats />
      <FAQ />
      <CTA />
    </>
  )
}

export default Home
