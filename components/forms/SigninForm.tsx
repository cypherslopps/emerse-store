"use client";

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

import { Input } from '../ui/Input'
import useForm from '@/hooks/useForm';
import { Button } from '../ui/Button';
import { Icons } from '../Icons';
import axios from '@/lib/axios';

const SigninForm = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange } = useForm(setData);

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const { data: responseData } = await axios.post("/auth/login", data);

      if (responseData.status) {
        localStorage.setItem("tk_as", JSON.stringify({
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken
        }))
        router.push("/dashboard");
      }
    } catch (err) {
      // 
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={login}>
      <Input 
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Email"
      />

      <Input 
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        placeholder="Password"
      />

      {/* <Input 
        type="password"
        name="confirmPassword"
        value={data.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
      /> */}

      <Button
        type="submit"
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

export default SigninForm