import Header from "./components/Header";
import MenuRow from "./components/MenuRow";
import Sidebar from "./components/Sidebar";

const menu1 = {
    menuName: "1993 왕돈까스 도시락",
    price: "9,300",
    imgName: "menu1.jpg",
  };
const menu2 = {
    menuName: "나시고랭 콤보",
    price: "6,800",
    imgName: "menu2.jpg",
};
  
const menu3 = {
    menuName: "나시고랭",
    price: "6,000",
    imgName: "menu3.jpg",
};
  
const menuArr = [menu1, menu2, menu3];

  
function Hansot() {
  return (
    <div>
      <Header></Header>
      <div className="content-container">
        <Sidebar></Sidebar>     
        <div className="menu-container">
            <MenuRow menuInfo={menuArr}></MenuRow>
            <MenuRow menuInfo={menuArr}></MenuRow>
            <MenuRow menuInfo={menuArr}></MenuRow>

        </div>
      </div>
    </div>
  );
}

export default Hansot;
