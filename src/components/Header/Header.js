import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Authcontext"
// import { useGoogleLogin } from '@react-oauth/google';
import GoogleLogin from "react-google-login";
import { CLIENT_ID } from "../../credintials";
import Profile from "../Profile/Profile";

function Header() {

  const { auth, setAuth, user, setUser } = useContext(AuthContext)

  return (

    <div className="h-20 flex items-center justify-end p-5 text-base space-x-5">

      <Link to="#" className="text-black text-md hover:text-slate-500">Gmail</Link>
      <Link to="#" className="text-black text-md hover:text-slate-500">Images</Link>

      <i className="fa-solid fa-list-ul text-md"></i>

      {
        auth ?
          <>
            <button
              className="p-3 bg-[#4285f4] hover:bg-gray-100 text-gray-800 font-bold rounded-full text-white hover:text-black hover:bg-lightgray"
              onClick={() => {
                setAuth(false)
                setUser({})
                localStorage.clear('token')
                
              }}
            >
              Logout
            </button>
          <Profile userImage={user.imageUrl}/>
          </>

          :
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
            cookiePolicy={'single_host_origin'}
            
           

          />
      }
    </div>

  )
}

export default Header