"use client"

import { useState, useEffect } from "react"

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Function to check if screen is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // 1024px is the lg breakpoint in Tailwind
    }

    // Check on initial load
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Clean up event listener
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  return isMobile
}

