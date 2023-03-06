import "../../css/admin.css";
import {Some} from "./user_icon"

export function HomePageAdmin(){
    return (
        <div className="principal">
            <header>
                <nav>
                    <a href="/admin"><button id="control_center">Organigrama</button></a>
                    <a href="/admin"><button id="control_center">Actividades</button></a>
                    <a href="/admin"><button id="control_center">Usuarios</button></a>
                    <Some name={"juan"}/>    
                </nav>
            </header>
            

        </div>
    )
}