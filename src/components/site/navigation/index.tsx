import { UserButton } from '@clerk/nextjs'
import { User } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
    user?:null | User
}

const Navigation = ({ user }: Props) => {
  return (
    <div className='fixed top-0 right-0 left-0 p-4 flex items-center justify-between relative'>
        <aside className='flex items-center gap-2'>
            <Image 
            src={'./assets/plura-logo.svg'}
            height={40}
            width={40}
            alt='Logo'
            />
            <span className='text-xl font-bold'>
            WebCraft.
            </span>
        </aside>
        <nav className="hidden md:block absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <ul className='flex items-center justify-center gap-8'>
                <Link href={'#'}>Pricing</Link>
                <Link href={'#'}>About Us</Link>
                <Link href={'#'}>Features</Link>
                <Link href={'#'}>Documentation</Link>
            </ul>
        </nav>
        <aside className='flex gap-2 items-center'>
            <Link href={'/agency'} className='block bg-gradient-to-r from-purple-900 to-purple-700 text-white p-3 px-6 rounded-full hover:rounded-full hover:border-4 hover:border-black transition-all duration-300'>Login</Link>
            <UserButton />
        </aside>
    </div>
  )
}

export default Navigation