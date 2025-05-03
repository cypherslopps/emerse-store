"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import { Input } from '../ui/Input'
import useForm from '@/hooks/useForm';
import { Button } from '../ui/Button';
import { Icons } from '../Icons';
import axios from '@/lib/axios';
import useSignupForm from '@/hooks/useSignupForm';

const SignupForm = () => {
  const {
    formik,
    isLoading,
    isValid,
    errors
  } = useSignupForm();

  return (
    <form 
      onSubmit={formik.handleSubmit}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Input 
          type="text"
          name="name"
          placeholder="Full name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.name.message}
          aria-invalid={errors.name.isInvalid}
        />

        <Input 
          type="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.email.message}
          aria-invalid={errors.email.isInvalid}
        />

        <Input 
          type="tel"
          name="phone_no"
          placeholder="Mobile number"
          value={formik.values.phone_no}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.phone_no.message}
          aria-invalid={errors.phone_no.isInvalid}
        />

        <Input 
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.password.message}
          aria-invalid={errors.password.isInvalid}
        />

        <Input 
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={errors.confirmPassword.message}
          aria-invalid={errors.confirmPassword.isInvalid}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isValid}
        isLoading={isLoading}
        className='w-full'
      >
        {isLoading && (
          <Icons.loader className="animate-spin text-white" />
        )}
        Submit
      </Button>
    </form>
  )
}

export default SignupForm