import React from 'react'

// Define a functional component named AuthLayout, which takes a single prop named children
// The prop children is of type React.ReactNode, representing the content to be rendered inside the component
const AuthLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full flex items-center justify-center'>{children}</div>
  )
}

export default AuthLayout