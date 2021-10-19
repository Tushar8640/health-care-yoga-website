import { useContext } from "react"
import { authContext } from "../Context/ContextProvider";



const useAuth  =() =>{
    return useContext(authContext)
}
export default useAuth;