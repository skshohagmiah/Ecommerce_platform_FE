import Storeheader from '@/components/header/StoreHeader'
import React from 'react'

const StoreIdLayout = ({children}: {children:React.ReactNode}) => {
  return (
    <div>
        <Storeheader />
        {children}
    </div>
  )
}

export default StoreIdLayout