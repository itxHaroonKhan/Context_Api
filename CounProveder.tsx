'use client'
import React, { useState } from 'react'
import { CounContext } from './context';

const CounProveder = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {

    const [Count, setCount] = useState(0);
  return (
    <CounContext.Provider value={{Count,setCount}}>
     {children}
    </CounContext.Provider>
  )
}

export default CounProveder
