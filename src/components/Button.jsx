import React from 'react'

const Button = ({title, id, rightIcon, leftIcon, containerClass}) => {
  // Classes base que podem ser sobrescritas
  const baseClasses = "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full px-7 py-3 text-black hover:scale-110 transition-all ease-in-out"
  // Classes padrão que só se aplicam se não houver containerClass
  const defaultClasses = containerClass ? "" : "bg-yellow-300 hover:bg-violet-100"
  
  return (
    <button id={id} className={`${baseClasses} ${defaultClasses} ${containerClass || ''}`}>
      {leftIcon && <span className="mr-2">{leftIcon}</span>}
      {title}
      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  )
}

export default Button