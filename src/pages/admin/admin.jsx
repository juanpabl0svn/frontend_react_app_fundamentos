import "../../css/admin.css";
// import {useState} from "react";
import Cookies from "universal-cookie"
import Bar from "../bar.jsx"


const cookie = new Cookies()


export function HomePageAdmin(){
    console.log(cookie.get('username'))


    if (!cookie.get('username')){
        window.location.href = "/"
    }
    return (<h1>
        <Bar rol={cookie.get("rol")}/>
        Bienvenidio {cookie.get("username")}
    </h1>)
        
    
}