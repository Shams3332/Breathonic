/* eslint-disable no-redeclare */
import { useEffect, useState, useMemo } from 'react';
import jwt_decode from 'jwt-decode';
import { createContext } from 'react';



export const AuthContext = createContext(null)

export default function AuthContextProvider(props) {



  const [userData , setUserData] = useState(null)

  function saveUserData(){
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken =jwt_decode(encodedToken);
    console.log(decodedToken);
    setUserData(decodedToken);

  }

  useEffect(()=>{
    if(localStorage.getItem('userToken') !==null){

      saveUserData();
    }
  },[])
  

  useEffect(() => {
  if (localStorage.getItem("token")) {
    saveUserData();
  }
  
});

  // for open login form and close register form
  function toggleOpenLogin() {
    setIsOpenLogin(true);
    setIsOpenSignin(false);
  }

  // for open register form and close login form
  function toggleOpenSignin() {
    setIsOpenSignin(true);
    setIsOpenLogin(false);
  }


  const [isOpenLogin, setIsOpenLogin] = useState(true);
  const [isOpenLSignin, setIsOpenSignin] = useState(true);

  // for open login form
  function toggleOpenLogin() {
    setIsOpenLogin(!isOpenLogin);
  }

  // end log in form


  // for open register form


  function toggleOpenSignin() {
    setIsOpenSignin(!isOpenLSignin);
  }

  // end register form


  function logOut(){
    localStorage.removeItem('userToken');
    setUserData(null);
    // navigate('/login')
    toggleOpenLogin()
  }



return <AuthContext.Provider value={{userData  , saveUserData,setUserData , logOut ,toggleOpenLogin , toggleOpenSignin, isOpenLogin , isOpenLSignin  }}>
{props.children}
</AuthContext.Provider>

}
