"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import axios from '@/lib/axios';

const DashboardNavigation = () => {
  const router = useRouter();
  
  const logout = async () => {
    try {
      const { data } = await axios.post("/auth/logout");

      if (data.status) {
        router.push("/account/sign-in");
      localStorage.removeItem("tk_as");
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className='flex items-center justify-between p-2.5'>
      <p>DashboardNavigation</p>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default DashboardNavigation