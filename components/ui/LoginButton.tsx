import Link from 'next/link'
import React from 'react'

const LoginButton = () => {
  return (
    <div className=''>
      <Link href="#graphy" passHref target='_blank' className='text-white py-2 px-12 rounded-xl hover:bg-blue-600 text-xl font-Plus-jakarta border-slate-100 border-[1px] font-light '> Login
      </Link>
    </div>
  )
}

export default LoginButton
