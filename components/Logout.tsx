"use client";

import React from 'react'
import { Button } from "@/components/ui/Button";

const Logout = () => {

    const logout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        try { 
          const response = await fetch("http://localhost:8000/api/auth/logout", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer`
            }
          })
          console.log(response);
        } catch (err: any) {
          console.log(err?.message)
        }
    }

    return (
        <Button
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            onClick={logout}
            rel="noopener noreferrer"
        >
            Logout
        </Button>
    )
}

export default Logout