import { useState, useEffect } from "react";

function useLocalStorage() {
    const[ user, setUser] = useState(null);

    useEffect(() => {
     const username = localStorage.getItem("username");
    username && setUser(username.split("@")[0])
    // setting up loggedin when user is already logged in before
    }, [])
    
  return user
}

export default useLocalStorage