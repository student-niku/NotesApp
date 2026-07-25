import React from 'react'
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  return (
    <div className='search-bar'>
      <CiSearch />
        <input type="text" placeholder='Search...' className='search-input' />     
    </div>
  )
}

export default SearchBar