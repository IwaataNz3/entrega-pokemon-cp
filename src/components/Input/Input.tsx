import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}
const Input = ({ className = '', label = '', ...props }: InputProps) => {

  return (
    <div>
      <label className="block text-gray-700 font-semibold" htmlFor={props.id}>{label}</label>
      <input
        className={`px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        {...props}
      />
    </div>
  )
}

export default Input