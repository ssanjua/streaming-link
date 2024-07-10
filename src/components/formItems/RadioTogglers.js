import React from 'react'

export default function RadioTogglers({ options }) {
  return (
    <div className='radio-togglers'>
      {options.map((option, key) => (
        <label key={option}>
          <input 
            type='radio' 
            name='bgType' 
            value={option.value} 
          />
          <span>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  )
}
