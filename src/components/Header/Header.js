import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../Context/Authcontext"

import Profile from "../Profile/Profile";
import GoogleBtn from "../Button/GoogleBtn";

function Header() {

  const { setAuth,setUser,auth, user } = useContext(AuthContext)


  return (

    <div className="h-20 flex items-center justify-end p-5 text-base space-x-5">

      <a href="https://www.gmail.com/"  className="text-black text-md hover:text-slate-500">Gmail</a>
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

          <GoogleBtn />
          
      }
    </div>

  )
}

export default Header