import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-yellow-300 px-7 py-3 text-black hover:bg-violet-100 hover:scale-110 transition-all ease-in-out ${containerClass}` }>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {title}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}

export default Button