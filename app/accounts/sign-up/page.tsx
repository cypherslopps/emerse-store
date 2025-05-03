import AccountHeaderContainer from '@/components/containers/AccountHeaderContainer'
import SignupForm from '@/components/forms/SignupForm'
import React from 'react'

const SignUp = () => {
  return (
    <section>
      <AccountHeaderContainer 
        title="Create an account"
        subHeader="Lorem ipsum sfdsfffg ssdfsdfdsf"
      />
      <SignupForm />
    </section>
  )
}

export default SignUp