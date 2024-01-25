import React from 'react'

function Button({title}) {
  return (
    <div>
      <button className='bg-slate-300 hover:bg-slate-400' type='submit'>{title}</button>
    </div>
  )
}

export default Button
