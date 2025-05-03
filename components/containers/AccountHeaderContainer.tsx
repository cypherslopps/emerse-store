import React, { FC } from 'react'

type Props = {
    title: string;
    subHeader?: string
}

const AccountHeaderContainer: FC<Props> = ({
    title,
    subHeader
}) => {
  return (
    <header className="space-y-2 flex flex-col items-center mb-6">
      <div className='size-16 bg-black rounded-2xl' />
      <h1 className="text-lg text-black/80 font-medium text-center tracking-tight">{title}</h1>
    </header>
  )
}

export default AccountHeaderContainer