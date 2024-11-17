import StoreDashboardSidebar from '@/components/sidebar/DashboardSidebar'
import React, { ReactNode } from 'react'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <StoreDashboardSidebar />
        {children}
    </div>
  )
}

export default DashboardLayout