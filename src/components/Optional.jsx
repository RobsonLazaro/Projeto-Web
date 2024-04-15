import React, { useState } from 'react';

function Optional({ index }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <div className='flex items-center'>
        <input type="checkbox" id={`adicional${index}`} className='hidden mr-1' onChange={handleCheckboxChange} />
        <label htmlFor={`adicional${index}`} className={isChecked ? 'cursor-pointer bg-orange-200 px-2 py-1 rounded-t-md' : 'cursor-pointer px-2 py-1 hover:bg-orange-200 rounded-md'}>Adicionais</label>
      </div>
      {isChecked && <div className='flex flex-col gap-1 px-2 py-2 bg-orange-200'>
        <div className='flex flex-row-reverse justify-between px-2 py-1 bg-orange-100'>
          <input type="checkbox" id={`ketchup${index}`} />
          <label htmlFor={`ketchup${index}`}>Ketchup</label>
        </div>
        <div className='flex flex-row-reverse justify-between px-2 py-1 bg-orange-100'>
          <input type="checkbox" id={`ketchup${index}`} />
          <label htmlFor={`ketchup${index}`}>Ketchup</label>
        </div>
      </div>}
    </div>
  )
}

export default Optional
