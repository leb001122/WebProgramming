import "../Hansot.css";
import MenuCard from "./MenuCard";

const MenuRow = (props) => {
    return (
        <div className="menu-container-row">
            <MenuCard menuInfo={props.menuInfo[0]}></MenuCard>    
            <MenuCard menuInfo={props.menuInfo[1]}></MenuCard>    
            <MenuCard menuInfo={props.menuInfo[2]}></MenuCard>    
        </div>
    );
}

export default MenuRow;