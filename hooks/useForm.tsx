"use client";

import React, { useState } from 'react'

const useForm = (setData: (val: any) => void) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setData((prevProps: any) => ({
            ...prevProps,
            [name]: value
        }));
    }

    return {handleChange}
}

export default useForm