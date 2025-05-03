"use client";

import React, { useCallback, useEffect, useState } from 'react'
import axios from '@/lib/axios';
import { IUser } from "../../types";
import { DataTable } from '@/components/tables/users/data-table';
import { columns, User } from '@/components/tables/users/columns';

const Users = () => {
  const [users, setUsers] = useState<User[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const { data } = await axios("/users");
      
      if (data.status) {
        setUsers(data.users);
      }
    } catch (err) {
      // 
    } finally {
      setIsLoading(false);
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  console.log(users);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : <div className="container mx-auto py-10">
            <DataTable columns={columns} data={users} />
        </div>}
    </div>
  )
}

export default Users