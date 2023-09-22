import { createContext, useContext } from "react";

const UserContext=createContext   
export const useUser=()=>{     //useuser-custom hook
    return useContext(UserContext);
}
export const UserProvider=()=>{
    const[isUserLoggeIn,setIsUserLoggedIn]=useState(false);

    const login=()=>{
        setIsUserLoggedIn(true);
    }
    const logout=()=>{
        setIsUserLoggedIn(false);
    }
    const userValue=userMemo(()=>(
        {
            isUserLoggeIn,login,logout  //update the hook

        }
    ),[isUserLoggeIn]);
    return(  //provider,consumer,diplay
        <UserContext.Provider value={[isUserLoggeIn,login,logout]}>  

        </UserContext.Provider> 
    )
}