import React from 'react'
import Navigation from '@/components/site/navigation'
import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes' 

// Define a functional component named AuthLayout, which takes a single prop named children
// The prop children is of type React.ReactNode, representing the content to be rendered inside the component
const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='h-full'>
      <ClerkProvider appearance={{baseTheme: dark}}>

      <Navigation />
      {children}
      </ClerkProvider>

      </div>
  )
}

export default layout