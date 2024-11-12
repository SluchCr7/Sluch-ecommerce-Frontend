import React from 'react'
import Link from 'next/link'
import Title from './Components/Title'
const NotFound = () => {
  return (
    <div className='flex bg-ModeOne-primary gap-4 dark:bg-ModeTwo-primary items-center justify-center w-full flex-col p-10'>
      <Title text1={"404"}/>.
    </div>
)
}

export default NotFound