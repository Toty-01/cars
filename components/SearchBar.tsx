'use client';
import { useState } from 'react';
import React from 'react'
import SearchManufacturer from './SearchManufacturer'

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handlesearch = () => {
    console.log("hello");
  }
  return (
    <form className='searchbar' onSubmit={handlesearch}>
      <div className="searchbar_item">
        <SearchManufacturer 
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar