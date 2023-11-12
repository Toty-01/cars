"use client"

import {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { CustomButton } from './';
import { calculateCarRent } from '@/utils';
import { cursorTo } from 'readline';
import '../styles/mainstyle.css'; 

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car} : CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year)

  return (
    <div className='car-card group point'>
      <div className="car-card__content-title">
        <h2>
          {make} {model}
        </h2>
      </div>
      <p className='flex mt-6 text-[28px] font-extrabold'>
          {carRent}
        <span className='self-start text-[14px] font-semibold'>
          €
        </span>
        <span className='self-end text-[14px] font-medium'>
          /jour
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image src="/hero.png" 
          alt='car model' 
          fill 
          priority 
          className='object-contain'
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/steering-wheel.svg" 
              width={20} 
              height={20} 
              alt='steering wheel'
            />
            <p className='text-[14px]'>
              {transmission === 'a' ? 'Automatic' : 'Manual'}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard