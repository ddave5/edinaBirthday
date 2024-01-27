import React, { useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

const ImageCarousel = ({children: slides}) => {

  const [curr, setCurr] = useState(0);
  const prev = () => setCurr( (curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr( (curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  const moveToImage = (index: number) => setCurr(index);
  return (
    <div className='overflow-hidden relative w-1/2' >
      <div className='flex transition-transform ease-out duration-1000 select-none' 
      style={{transform: `translateX(-${curr * 100}%)`}}>{slides}</div>
      <div className='absolute inset-0 flex items-center justify-between p-4'>
        <button className='p-1 h-fit rounded-full shadow bg-red-100 text-gray-800 hover:bg-white' onClick={prev}>
          <MdNavigateBefore/>
        </button>
        <button className='p-1 h-fit rounded-full shadow bg-red-100 text-gray-800 hover:bg-white' onClick={next}>
          <MdNavigateNext />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {
            slides.map( (_, i) => (
              <button className={`
                transition-all w-3 h-3 bg-white rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `} onClick={() => moveToImage(i)}
              key={i}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ImageCarousel