import "../Movie.css"

function NavBar() {
    return (
        <div className="nav">
            <div className="contents">
                <ul className="nav_menu"> 
                    <li>
                        <h2>
                            <a href="">영화</a>
                        </h2>
                    </li>
                    <li>
                        <h2>
                            <a>극장</a>
                        </h2>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}

export default NavBar;