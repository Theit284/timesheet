import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { getAccessToken } from '../utils/LocalStorage'

const  PrivatedRoute:React.FC =() => {
    const token = getAccessToken();
  return (
        token ? <Outlet/> : <Navigate to ="/account/login"/>

  )
}

export default PrivatedRoute;