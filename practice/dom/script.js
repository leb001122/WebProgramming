function addText() {
    let x = document.getElementsByTagName("LI");
    document.getElementById("demo").innerHTML = x[2].innerHTML;
}

function removeMenu() {
    let demo = document.querySelector("#demo");
    demo.innerHTML = "";
}

function menuTemp() {
    let iceMenus = document.getElementsByClassName("ice-menu");
    console.log(iceMenus);
    // for (let i in [...iceMenus]) {
    //     iceMenus[i].style.color = "blue"
    // }
    iceMenus = [...iceMenus];
    console.log(iceMenus);
    iceMenus.forEach((x) => (x.style.color = "blue"));

    let hotMenus = document.getElementsByClassName("hot-menu");
    console.log(hotMenus);
    for (let i in [...hotMenus]) {
        hotMenus[i].style.color = "red"
    }
}

function menuTempClear() {
    let menus = document.querySelectorAll("#menu-ul li");
    menus.forEach((x) => (x.style.color = ""));
}

function popupSelected() {
    let demo = document.getElementsByClassName("select-textbox")[0];
    let selectedNum = demo.value;
    console.log(selectedNum);
    alert(getMenuName(selectedNum));
}

function getMenuName(pos) {
    let str = null;

    if (pos == '' || pos < 0 || pos > 3) {
        str = '입력이 올바르지 않습니다.';
        return str;
    }

    let menuUL = document.getElementById("menu-ul");
    if (pos == 1) {
        str = menuUL.firstElementChild.innerHTML;
    }
    else if (pos == 2) {
        str = menuUL.firstElementChild.nextElementSibling.innerHTML;
    }
    else if (pos == 3) {
        str = menuUL.lastElementChild.innerHTML;
    }
    return str;
}

function fontSizeUp() {
    let lis = document.querySelectorAll("#menu-ul li");
    lis.forEach((x) => (x.style.fontSize = "30px"));
}

function myFunction() {
    var x = document.getElementsByName("fname")[0].value;
    console.log(x);
    document.getElementById("demo2").innerText = x;
}

function getAttributesByProperty() {
    let div = document.getElementById('myDiv');
    document.getElementById("demo3").innerText 
    = div.id + " " + div.className + " " + 
    div.title + " " + div.lang + " " + div.dir;
}

function getAttributesByMethod() {
    let div = document.getElementById('myDiv');
    document.getElementById("demo3").innerText 
    = div.getAttribute("id") + " " + div.getAttribute("class") + " " + 
    div.getAttribute("title") + " " + div.getAttribute('lang') + " " + 
    div.getAttribute('dir');

    div.removeAttribute('dir');
}

function getAttributes() {
    let button = document.getElementById('button');
    let anchor = document.getElementById('anchor');

    console.log(button.href);
    console.log(anchor.href);
    console.log(button.onclick);
    console.log(anchor.onclick);

}

function setAttributeByProperty() {
    let button = document.getElementById('button');
    let anchor = document.getElementById('anchor');

    button.title = 'input Text';
    button.onclick = "alert('modified click')" // 적용안됨. null이 되어버림.
    anchor.href = 'https://www.naver.com/';
    anchor.style.fontSize = '40px'
}

function setAttributeByMethod() {
    let button = document.getElementById('button');
    let anchor = document.getElementById('anchor');

    anchor.setAttribute('href', 'http://cs.kumoh.ac.kr/cs/index.do');
    anchor.setAttribute('style', 'font-size:30px; border:1px solid blue');
}

function buttonFunction() {
    let x = document.getElementsByTagName("H1");
    x[0].setAttribute("class", "header-text");
    x[1].setAttribute("class", "body-text")
}

function setClass() {
    let classModi = document.getElementById('classModi');
    classModi.className = 'first';
    classModi.className = classModi.className + ' second';
    classModi.className = classModi.className + ' third';
    console.log(classModi.className);
}

function setClass2() {
    let classModi = document.getElementById('classModi');
    let classes = classModi.className.split(' ');
    var newClassName = '';
    for (i of classes) {
        if (i == 'second') 
            continue;
        newClassName += i + ' ';
    }
    classModi.className = newClassName;
}

function addElement() {
    let root = document.getElementsByTagName('ol')[0]; //root는 살아있는 객체
    let li = document.createElement('li');
    let content = document.createTextNode('게임');
    // li.id = 'newLi';
    li.className = 'festival';
    li.appendChild(content);
    root.appendChild(li); // 요소를 추가할 경우 부모 요소를 먼저 찾아야함.

    li = document.createElement('li');
    content = document.createTextNode('휴강');
    li.appendChild(content);
    root.insertBefore(li, root.firstElementChild.nextElementSibling);  // 원하는 위치에 추가
}

function removeElement() {  
    let root = document.getElementsByTagName('ol')[0]; //root는 살아있는 객체
    let jujum = root.childNodes[2];
    jujum.remove();
}

function replaceElement() {  
    // 삭제+추가
    let root = document.getElementsByTagName('ol')[0]; //root는 살아있는 객체
    let li = document.createElement('li');
    li.textContent = '체육대회';
    root.replaceChild(li, root.lastElementChild); // 교체할 요소, 교체될 요소
}