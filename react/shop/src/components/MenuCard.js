const MenuCard = (props) => {
    return (
        <div className="menu-card">
        <div className="menu-img">
          <img src={"./img/"+props.menuInfo.imgName} alt={props.menuInfo.menuName} />
        </div>
        <div class="menu-text">
          <h4>{props.menuInfo.menuName}</h4>
          <h4>{props.menuInfo.price}</h4>
        </div>
      </div>
    );
}

export default MenuCard;