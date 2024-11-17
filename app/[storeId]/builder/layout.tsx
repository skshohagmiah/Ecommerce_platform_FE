import StoreBuilderSidebar from '@/components/sidebar/StoreSidebar'
import React, { ReactNode } from 'react'

const BuilderLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <StoreBuilderSidebar />
        {children}
    </div>
  )
}

export default BuilderLayout