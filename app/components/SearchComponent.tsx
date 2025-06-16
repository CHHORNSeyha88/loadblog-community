import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';

const SearchComponentPage = () => {
    
    const query= 'query'

  return (
    <>
    <Form action="/" scroll={false} className='search-form bg-white max-w-3xl w-full min-h-[80px] border rounded-[80px] text-[24px] mt-8 px-5 items-center flex flex-row gap-5'>
    <input 
    name='query'
    defaultValue={query}
    placeholder='Seach StartUp!'
    className='flex-1 font-bold placeholder:font-semibold placeholder:text-black-100 w-full outline-none h-auto' />
   <div className='flex gap-2'>
    {query && <SearchFormReset/> }
    <button type='submit' className='size-[50px] rounded-full bg-black flex justify-center items-center text-white !important'></button>
   </div>
    </Form>  

 </>
  )
}

export default SearchComponentPage;