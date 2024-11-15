import { Children, createContext, useEffect, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'

export const AppContext = createContext();

const AppContextProvider = ({Children})=>{
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [token,setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):false);
    const [userData,setUserData] = useState(false)


    const loadUserProfileData = async ()=>{
        try {
            const {data} = await axios.get(backendUrl + '/api/user/get-profile',{headers: { Authorization: `Bearer ${token}` }})
            if(data.success){
                setUserData(data.userData)
            }else{
                toast.error(data.error)
            }
        } catch (error) {
            toast.error(error.message || "An Error Occurred while profile")
        }
    }
    const value ={
        token,
        setToken,
        userData,
        setUserData,
        loadUserProfileData,
        backendUrl
    }

    useEffect(()=>{
        if(token){
            loadUserProfileData()
        }else{
            setUserData(false)
        }
    },[token])

    return (
        <AppContext.Provider value={value}>
            {Children}
        </AppContext.Provider>
    )
}
export default AppContextProvider;
