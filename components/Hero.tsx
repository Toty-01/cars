"use client"

import React from 'react'
import { CustomButton } from '.'

const Hero = () => {

  const handleScroll = () => {

  }

  return (
    <div className='hero'>
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Rouler en toute liberté - Trouver le véhicule idéal
        </h1>
        <p className="hero__subtitle">
          Commencer l'éxperience en ligne en parcourant notre parc de véhicules
        </p>
        <CustomButton 
         title="Visiter le parking"
         containerStyles="bg-primary-blue text-white rounded-full mt-10"
         handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <img 
           src="/hero.png" 
           alt="hero"
           className="object-contain mt-20"
           />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  )
}

export default Hero