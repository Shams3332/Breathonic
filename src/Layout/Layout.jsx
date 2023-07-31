import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import { useContext } from 'react';
import { AuthContext } from './../auth/AuthContext';




export default function Layout() {


  const { userData } = useContext(AuthContext);

  return (
    <>
    <Navbar userData={userData}/>
    <div className='py-3 my-5'>
    <Outlet/>

    </div>
    <Footer/>


    </>
  )
}
