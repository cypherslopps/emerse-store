import Link from 'next/link'
import React from 'react'
import { Icons } from '../Icons'
import { Button } from '../ui/Button'
import CartIconButton from '../CartIconButton'

const GuestNavigation = () => {
  return (
    <header className="sticky top-0 w-full px-1 bg-white">
      <nav className="h-16 flex items-center justify-between px-3 sm:px-5 border-b border-border backdrop-blur-lg">
        <Link
          href="/"
          className="inline-flex items-end gap-1.5 sm:gap-1 font-bold"
        >
          <Icons.basket className="size-6 sm:size-7" />
          <span className="text-base sm:text-lg">Emerse</span>
        </Link>

        <div className="inline-flex gap-4">
          <div className="flex items-center gap-3">
            <Button
              variant="transparent"
              size="none"
            >
              <Icons.heart className='size-6' />
            </Button>

            {/* Cart Icon Button */}
            <CartIconButton />
          </div>

          <Button className='w-24 font-medium'>
            Login
          </Button>
        </div>
      </nav>

    </header>
  )
}

export default GuestNavigation