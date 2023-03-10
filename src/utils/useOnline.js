import React, { useState, useEffect } from 'react'

export default function useOnline() {
    const [online, setOnline] = useState(true);

    useEffect(() => {
        const handleOnline = () => {
            setOnline(true)  
        }
        const handleOffline = () => {
            setOnline(false)  
        }

      window.addEventListener( 'online', handleOnline);
      window.addEventListener( 'offline',handleOffline);
    
      return () => {
        window.removeEventListener('online', handleOnline)
        window.removeEventListener('online' ,handleOffline)
      }
    }, [])
    
  return online
}
