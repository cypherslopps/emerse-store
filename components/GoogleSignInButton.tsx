"use client";

import React from 'react'
import { Button } from "./ui/Button";
import Image from 'next/image';

const GoogleSignInButton = () => {
    const googleSignIn = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        const popup = window.open(
            "http://localhost:8000/api/auth/google",
            "googleLoginPopup",
            "width=500,height=600"
        );
    
        const popupListener = (event: any) => {
            console.log(event);
            if (event.origin !== "http://localhost:8000") return;
        
            const { token } = event.data;
            console.log(token);
            if (token) {
                console.log(token);
                localStorage.setItem("token", token); // or use context/store
                popup?.close();
                window.removeEventListener("message", popupListener);
                // Optionally navigate or show success UI
            }
        };
    
        window.addEventListener("message", popupListener);
    }
  
    return (
        <Button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            rel="noopener noreferrer"
            onClick={googleSignIn}
        >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Google SignIn
        </Button>
    )
}

export default GoogleSignInButton