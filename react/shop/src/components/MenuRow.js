import "../Hansot.css";
import MenuCard from "./MenuCard";

const MenuRow = (props) => {
    return (
        <div className="menu-container-row">
            {props.menuInfo.map((m, index) => (
                <MenuCard 
                    menuInfo={m}  
                    setClickedMenu={props.setClickedMenu}
                    cardOrder={index}
                ></MenuCard>    
            ))}
        </div>
    );
}

export default MenuRow;