"use client"

import {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';
import { CarDetails, CustomButton } from './';
import { calculateCarRent } from '@/utils';
import { cursorTo } from 'readline';
import '../styles/mainstyle.css'; 

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({car} : CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const convertMpgToKmpl = (mpg: number) => {
    const kmPerMile = 1.60934;
    const litersPerGallon = 3.78541;
    return (mpg * kmPerMile) / litersPerGallon;
  };

  // Convertir la valeur city_mpg
  const city_kmpl = convertMpgToKmpl(city_mpg);

  const [isOpen, setIsOpen] = useState(false);

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
              {transmission === 'a' ? 'Auto' : 'Manuel'}
            </p>
          </div>          
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" 
              width={20} 
              height={20} 
              alt='steering wheel'
            />
            <p className='text-[14px]'>
              {drive.toLocaleUpperCase()}
            </p>
          </div>          
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" 
              width={20} 
              height={20} 
              alt='steering wheel'
            />
            <p className='text-[14px]'>
              {city_kmpl.toFixed(2)} km/l
            </p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton 
            title='Voir plus'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() =>setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() =>
      setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard