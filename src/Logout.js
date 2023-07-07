import { auth } from './firebaseConfig';
import { signOut } from 'firebase/auth';
import { Navigate } from "react-router-dom";

function Logout(){
    auth.signOut();
    console.log('User signed out!');
    return (<Navigate replace to="/" />);
}

export default Logout