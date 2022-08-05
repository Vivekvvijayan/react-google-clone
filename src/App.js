import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Result from "./pages/Result/Result";
import { useEffect,useContext } from 'react'
import { AuthContext } from "./Context/Authcontext";


function App() {

  const {setAuth,setUser } = useContext(AuthContext)
  useEffect(() =>{
    const token = JSON.parse(localStorage.getItem('token'))

    if(token){
      setAuth(true)
      console.log(typeof(token))
      setUser(token)
    }else{
      setAuth(false)
      setUser({})
    }
  },[setUser,setAuth]);
 
  return (
    <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
        </Routes>
    
  
    </BrowserRouter>
  );
}

export default App;
