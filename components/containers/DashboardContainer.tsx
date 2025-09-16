import React from 'react'

const DashboardContainer = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main className="h-full min-h-screen bg-gray-100/80">
      <section>
        {children}
      </section>
    </main>
  )
}

export default DashboardContainer;