import "../css/new_password.css";

export function NewPassword(){
    return (
    <div className="app">
        <div className="container">
        <label htmlFor="account">Cuenta</label>
            <input type="text" id='account' />
            <label htmlFor="user">Usuario</label>
            <input type="text" id='user' />
            <label htmlFor="password">Nueva contraseña</label>
            <input type="password" id="password" />
            <label htmlFor="password">Repetir nueva contraseña</label>
            <input type="password" id="password" />
        </div>
        <div className="buttons">
            <a href="/"><button className="back">Volver</button></a>
            <button className="send">Solicitar</button>
        </div>
        
    </div>
    );
}