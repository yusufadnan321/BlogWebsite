import React from 'react'
import Layout from '../../../layout'
import Adminsidebar from './Adminsidebar'

function Admin() {
  return (
    <Layout>
    <div className='flex'>
      <Adminsidebar/>
      <div className="flex-1 p-10 bg-gray-100 min-h-screen">
 
    </div>
    
    </div>
    </Layout>
  )
}

export default Admin