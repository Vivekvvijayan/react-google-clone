import { useContext } from 'react';
import { CLIENT_ID } from "../../credintials"
import { AuthContext } from "../../Context/Authcontext"
import GoogleLogin from "react-google-login";

const GoogleBtn = () =>
{
const { setAuth, setUser } = useContext(AuthContext)


        return (

            <GoogleLogin
                clientId={CLIENT_ID}
                buttonText="Sign In"
                onSuccess={data => {
                    localStorage.setItem('token', JSON.stringify(data.profileObj))
                    setAuth(true)
                    setUser(data.profileObj)
                }}
                onFailure={data => {
                    console.log('failed login')
                }}

                theme="dark"
                icon={false}




            />
        )
    } 

    export default GoogleBtn