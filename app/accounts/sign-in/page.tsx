import AccountHeaderContainer from '@/components/containers/AccountHeaderContainer'
import SigninForm from '@/components/forms/SigninForm'
import React from 'react'

const SignIn = () => {
  return (
    <section>
      <AccountHeaderContainer
        title="Create an account"
        subHeader="Lorem ipsum sfdsfffg ssdfsdfdsf"
      />
      <SigninForm />
    </section>
  )
}

export default SignIn