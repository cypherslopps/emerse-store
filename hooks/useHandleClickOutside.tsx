"use client";

import { useEffect, useRef } from 'react'

const useHandleClickOutside = (
    callback: () => void,
    isActive: boolean
) => {
  const containerRef = useRef(null);

    useEffect(() => {
        if (!isActive) return;

        function handleClickOutside(e: MouseEvent) {
            if (
                containerRef.current && 
                !(containerRef.current as any)?.contains(e.target)
            ) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [callback, isActive])

    return { containerRef };
}

export default useHandleClickOutside