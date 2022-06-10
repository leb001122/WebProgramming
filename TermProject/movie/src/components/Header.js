import "../Movie.css";


function Header() {
    return (
        <div className="header_content">
            <div className="contents">
                <h1 >
                    <a href="/">
                        <img src="img/logoRed.png" alt="CGV"></img>
                    </a>
                    <span>CULTUREPLEX</span>
                </h1>

                <ul className="memberInfo_wrap">
                    <div className="ad-partner">
                        <img src="img/hyundai_card.png"></img>
                    </div>
                    <li>
                        <a>
                            <img src="img/loginPassword.png"></img>
                            <span>로그인</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="img/loginJoin.png"></img>
                            <span>회원가입</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="img/loginMember.png"></img>
                            <span>MY CGV</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="img/loginCustomer.png"></img>
                            <span>고객센터</span>
                        </a>
                        
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Header;