// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import logo from './logo.svg';
import './App.css';
import React, {useState, Fragment, useRef} from "react";

function App() {
    let [posts, setPosts] = useState([post1, post2]);
    let postDate = new Date();
    let likes = 5;

     return (
      
       <div className="post-container">
         <TopNav></TopNav>
         <Search></Search>
         <BlogInfo></BlogInfo>
         <HighLight></HighLight>
            <div className="post-list">
                <h2>제목 : {posts[0].title}</h2>
                <p>글쓴이: {posts[0].writer}</p>
                <p>
                    날짜: {posts[0].year}년 {posts[0].month}월
                </p>
                <p>좋아요:{posts[0].likes}
                
                </p>
                
            </div>
            <div className="post-list">
                <h2>제목 : {posts[1].title}</h2>
                <p>글쓴이: {posts[1].writer}</p>
                <p>
                    날짜: {posts[1].year}년 {posts[1].month}월
                </p>
                <p>좋아요:{posts[1].likes}
                  <i
                    onClick={() => {
                      let modiPost = posts.map((post) =>
                        post.postId === 1 ? { ...post, likes: post.likes + 1 } : post
                      );
                      setPosts(modiPost);
                    }}
                  >
                    👍
                  </i>

                </p>
                
            </div>
            <Paging />
        </div>
     );
}
    

const post1 = {
    postId: 1,
    title: "blueDot 방문",
    writer: "kim",
    year: 4,
    month: 6,
    likes: 5,
  };

  const post2 = {
    postId: 2,
    title: "한솥 후기",
    writer: "kim",
    year: 4,
    month: 6,
    likes: 10,
  };
  

  // 컴포넌트는 무조건 대문자
  function Paging() {
    let [pageNum, setPageNum] = useState(1);
    return (
      <div>
        <botton
          onClick={() => {
            setPageNum(pageNum - 1);
            setPageNum(pageNum - 1);
            console.log(pageNum);
          }}
        >
          ◀
        </botton>
        {pageNum}
        <botton
          onClick={() => {
            setPageNum((prevState) => prevState + 1);
            setPageNum((prevState) => prevState + 1);
            console.log(pageNum);
          }}
        >
          ▶
        </botton>
      </div>
    );
  }
  
  
const blogInfo = {
    nPosts: 200,
    nFollower: 400,
    nFollow: 600,
};
  
function BlogInfo() {
  let [info, setInfo] = useState(blogInfo);
  return (
    <div className="info-container">
      <div className="info-list">게시물:{info.nPosts}</div>
      <div className="info-list">팔로워:{info.nFollower}</div>
      <div className="info-list">팔로우:{info.nFollow}</div>

      <i
        onClick={()=>{
          setInfo({...info,  nFollow: info.nFollow + 1});
        }}
      >팔로우❤</i>
    </div>
  );
}
  


function TopNav() {
  return (
    <div className="top-nav">
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"></img>
    </div>
  );
}
function Search() {
  const [inputs, setInputs] = useState({
    searchTitle: "",
    searchWriter: "",
  });

  // const nameInput = useRef(null);
  const nameInput = useRef([]);

  
  const onChange = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
    console.log(inputs);
  };

  const onReset = () => {
    nameInput.current[0].focus();
    nameInput.current[0].value="";
    nameInput.current[1].value="";


  };

    
  return (
    <Fragment>
      <div className="search">
        <div>
          <input name="searchTitle" placeholder="글제목" onChange={onChange} ref={(el) => (nameInput.current[0]=el)}/>
          <input name="searchWriter" placeholder="글쓴이" onChange={onChange} ref={(el) => (nameInput.current[1]=el)}/>
          <button onClick={onReset}>찾기</button>
        </div>
        <p id="search_para">
          검색 문자열: {inputs.searchTitle}+{inputs.searchWriter}
        </p>
      </div>
    </Fragment>
  );
}


function HighLight() {
  return (
    <div className="highlist-box">
      <i class="left-btn">←</i>
      <i class="right-btn">→</i>
      <div className="carousel">
        <div className="ca-item">1</div>
        <div className="ca-item selected">2</div>
        <div className="ca-item">3</div>
      </div>
    </div>
  );
}


export default App;
