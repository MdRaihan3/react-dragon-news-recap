import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate,useLocation } from "react-router-dom";

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const loacation = useLocation()
    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} 
        to='/login'></Navigate>
    );
};

export default PrivateRoutes;