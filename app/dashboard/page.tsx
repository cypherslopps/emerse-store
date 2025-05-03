"use client";

import React, { useCallback, useEffect, useState } from 'react'
import axios from '@/lib/axios';
import { IUser } from '../types';

const Dashboard = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUser = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios("/users/me");
      
      if (data.status) {
        setUser(data.user);
      }
    } catch (err) {
      // 
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchUser()
  }, [fetchUser])

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : <div>
        <p>{user?.username}</p> 
        <p>{user?.email}</p>
        <p>{user?.role}</p> 
      </div>}
    </div>
  )
}

export default Dashboard