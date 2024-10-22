import React from 'react'
import Hero from '../Pages/Hero/Hero'
import Ourservises from '../Pages/Ourservises/Ourservises'
import Chooseus from '../Pages/Chooseus/Chooseus'
import Ourclients from '../Pages/Ourclients/Ourclients'
import Ourteam from '../Pages/Ourteam/Ourteam'
export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Ourservises></Ourservises>
      <Chooseus></Chooseus>
      <Ourteam></Ourteam>
      <Ourclients></Ourclients>
    </div>
  )
}
