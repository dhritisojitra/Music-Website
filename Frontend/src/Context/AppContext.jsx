import { createContext, useState } from "react";
import axios from 'axios';


export const AppContent = createContext()

export const AppContextProvider = (props)=>{
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userData, setUserData] = useState(false)

    const getUserData = async () => {
        try {
            const { data } = await axios.get(backendURL + '/api/user/data');
            if (data.success) {
                setUserData(data.userData);
            } else {
                console.error(data.message);
            }
        } catch (err) {
            alert("Error fetching user data: " + err.message);
            console.error(err); // for debugging
        }
    };
    

    const value ={
        backendURL,
        isLoggedIn,setIsLoggedIn,
        userData,setUserData,getUserData
    }
    return(
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}