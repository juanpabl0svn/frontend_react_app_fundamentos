import "../css/main.css" 
import { useState } from "react";
import axios from "axios"
import Cookies from "universal-cookie"
import md5 from "md5"

const Cookies = new Cookies()

export function LogIn(){

  const [info, setInfo] = useState({username:"",password:""})

  const send = async(e)=>{
    e.preventDefault()
    let encript = {...info, password: md5(info.password)}
    let StringData = JSON.stringify(encript)
    let {data,status}  = await axios.get(`http://localhost:3001/getUser/${StringData}`)
    if (status === 200){
      cookie.set('username',data.username,{path:"/"})
      cookie.set('password',data.password,{path:"/"})
      window.location.href = `/admin`
    }
    return
    
  }



  if (cookie.get('username')){
    window.location.href = "/admin"
}else{
  return (
  <div className="app">
    <form className="container" onSubmit={send}>
      <div className="datos">
      <label htmlFor="user">Usuario</label>
      <div className="separator">
        <input type="text" name="username" id="username" value={info.username}  onChange={(e) => setInfo({...info,username :e.target.value})} />
        <span></span>
      </div>
      <label htmlFor="password">Contraseña</label>
      <div className="separator">
        <input type="text" name="password" id="password" value={info.password}  onChange={(e) => setInfo({...info,password : e.target.value})} />
        <span></span>
      </div>
      </div>
      <a href="/olvidar_contraseña">¿Olvidaste tu contraseña?</a>
      <button type="submit">Entrar</button>
    </form>
  </div>
  );
}
}