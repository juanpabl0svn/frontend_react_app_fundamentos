import "../css/main.css" 
import { useState } from "react";
// import axios from "axios"

export function LogIn(){

  const [info, setInfo] = useState({user:"",password:""})

  const send = async(e)=>{
    e.preventDefault()
    // let StringData = JSON.stringify(info)
    // let res  = await axios.get(`http://localhost:3001/getUser/${StringData}`)
    // console.log(res)
    // console.log(info)l
    window.location.href = "/admin"
  }

    return (
    <div className="app">
      <form className="container" onSubmit={send}>
        <div className="datos">
        <label htmlFor="user">Usuario</label>
        <div className="separator">
          <input type="text" name="username" id="username" value={info.user}  onChange={(e) => setInfo({...info,user :e.target.value})} />
          <span></span>
        </div>
        <label htmlFor="password">Contraseña</label>
        <div className="separator">
          <input type="text" name="password" id="password" value={info.password}  onChange={(e) => setInfo({...info,password :e.target.value})} />
          <span></span>
        </div>
        </div>
        <a href="/olvidar_contraseña">¿Olvidaste tu contraseña?</a>
        <button type="submit">Entrar</button>
      </form>
    </div>
    );
}



/* <form className="form-floating" onSubmit={send}>
        <div className="form-floating">
          <input type="text" className="form-control" id="user" />
          <label htmlFor="usuario">Usuario</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="clave" />
          <label htmlFor="clave">Constraseña</label>
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
      <a href="/olvidar_contraseña">Recuperar contraseña</a> */