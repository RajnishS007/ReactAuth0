// import React from "react";

// function User() {
//     return (
//         <div>
//         <img />
//         <h1> Name of the user is: alt= {user.name} </h1>
//         <p> Email of the user is: alt ={user.Email} </p>

        
//         </div>
//     )
// }

// export default LogIn







import React from "react";
import {useAuth0} from '@auth0/auth0-react'

const User = () => {
    const {user, isAuthenticated, isLoading} = useAuth0();

    if(isLoading === true){
        return <div>Loading....</div>
    }

    return(
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    )
}

export default User;