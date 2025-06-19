'use client';
import Link from 'next/link';
import React from 'react'

const SearchFormReset = () => {
       // reset function
    const resetFunction = () =>{
        const form = document.querySelector(' .search-form') as HTMLFormElement
        if(form) form.reset();
    }

  return (
    <div>
          {/* <button type='reset' onClick={resetFunction}> */}
            <Link href="/" onClick={resetFunction} className='size-[50px] rounded-full bg-black flex justify-center items-center text-white !important'>
            X
            </Link>
         {/* </button> */}
    </div>
  )
}

export default SearchFormReset;