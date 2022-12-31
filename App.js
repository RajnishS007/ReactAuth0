// import logo from './logo.svg';
// import './App.css';
// import { useEffect } from 'react';

// function App() {

//   //if user is looged in succesfully then we will display user details and logout button
//   //if the user is not looge in then we will display only the login button

//   // To check if user is successfully authenticated we wil use a hook of AuthO

//   const {is authenticated}= useAuth0();
  
//   return (
//     <div className="App">
//     {!isAuthenticated?(
//       <div> <Login/> </div>
//     ): (
//       <Logout />
//       <User />
//       </div>
//     ) }
//   )
  
// }

// export default App;







import logo from './logo.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react'
import React from 'react';
import Login from './components/Login';
import Logout from './components/Logout';
import User from './components/User';

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="App">
      {!isAuthenticated ? (
        <div>
          <p>Login</p>
          <Login />
        </div>
      ) : (
        <div>
          <Logout />
          <User />
        </div>)}

    </div>
  );
}

export default App;