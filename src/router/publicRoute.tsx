import React from 'react'
import { Navigate, Outlet } from 'react-router';
import { getAccessToken } from '../utils/LocalStorage'

function PublicRoute() {
    const token = getAccessToken();
  return (
    !token ? <Outlet/> : <Navigate to="/home"/>
  )
}

export default PublicRoute