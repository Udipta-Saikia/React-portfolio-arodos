import { ArrowUp } from 'lucide-react'
import React from 'react'

export const Footer = () => {
  return (
  <footer className='py-12 px-4 bg-card relative border-t border mt-12 pt-8 flex f;ex-wrap justify-between items-center'>
    <p className='text-sm text-muted-foreground'>
        &copy; {new Date().getFullYear()} UdiptaSaikia, All Rights Reserved.
    </p>

    <a href="#hero" className='p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors'>
    <ArrowUp size={20}/></a>
  </footer>
  )
}
