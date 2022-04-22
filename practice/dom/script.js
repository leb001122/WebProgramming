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
    for (let i in [...iceMenus]) {
        iceMenus[i].style.color = "blue"
    }

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
    var x = document.getElementsByName("fname")[0].tagName;
    document.getElementsById("demo2").innerHTML = x;
}