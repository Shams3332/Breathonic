import React, { useState, useEffect, useContext } from 'react';
import Layout from './Layout/Layout';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Check from './Check/Check';
import List from './ListPatient/List';
import Help from './Help/Help';
import Profile from './Profile/Profile';
import Information from './PatientInformation/Information';
import Newpatient from './Newpatient/Newpatient';
import LiveDemo from './Login/LiveDemo';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import FormDoctor from './FormDoctor/FormDoctor';
import AuthContextProvider from './auth/AuthContext';
import ProdectedRoute from './ProtectedRoute/ProtectedRoute';
import CheckRecords from './CheckRecords/CheckRecords';
import { AuthContext } from './auth/AuthContext';
import EditeProfile from './EditProfile/EditeProfile';



export default function App() {

  let { userData, saveUserData, logOut } = useContext(AuthContext)

  
  
  
  let routers = createHashRouter([
    {
      path: '/', element: <Layout userData={userData} logOut={logOut} />, children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'chekhere', element: < CheckRecords/> },
        { path: 'edit', element: < EditeProfile/> },
        { path: 'contact', element: <Contact /> },
        { path: 'check', element:  <ProdectedRoute><Check  userData={userData}/></ProdectedRoute>  },
        { path: 'listpatient', element: <ProdectedRoute>  <List  userData={userData}/></ProdectedRoute> },
        { path: 'profile', element:  <ProdectedRoute > <Profile userData={userData}/></ProdectedRoute> },
        { path: 'help', element: <Help /> },
        { path: 'newpatient', element:  <ProdectedRoute> <Newpatient  userData={userData}/></ProdectedRoute>  },
        { path: 'info/:full_name', element:  <ProdectedRoute> <Information  userData={userData}/></ProdectedRoute> },
        { path: 'login', element: <LiveDemo saveUserData={saveUserData}/> },
        { path: 'formDoctor', element:  <ProdectedRoute><FormDoctor userData={userData} /></ProdectedRoute>   },
        { path: '*', element: <h1>404 not Found</h1> },
      ]
    }
  ])
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={routers} />
      </AuthContextProvider>
    </>
  )
}
