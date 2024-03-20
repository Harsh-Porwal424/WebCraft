import Navigation from '@/components/site/navigation'
import React from 'react'

// Define a functional component named AuthLayout, which takes a single prop named children
// The prop children is of type React.ReactNode, representing the content to be rendered inside the component
const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full'>
      <Navigation />
      {children}
      </div>
  )
}

export default layout