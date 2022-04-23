function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}






let slideIndex = 1;
showSlides(slideIndex);

function showSlides(pos) {
    let slides = document.getElementsByClassName("slide");

    if (pos < 1) {
        slideIndex = slides.length;
    }
    else if (pos > slides.length) {
        slideIndex = 1;
    }

    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function plusSlides(pos) {
    showSlides(slideIndex += pos);
}








let acc = document.getElementsByClassName('accordian');
var i;
for (i of [...acc]) {
    i.addEventListener('click', openPanel);
}
function openPanel(event) {
    this.classList.toggle('active');
    let panel = this.nextElementSibling;
    let panels = document.getElementsByClassName('panel');

    if (panel.style.display === 'block') {
        panel.style.display = 'none';
    } else {
        panel.style.display = 'block';
    }
    for (i of [...panels]) {
        if (i === panel) continue;
        i.style.display = 'none';
    }
}

let selectbox = document.getElementById('selectbox');
selectbox.addEventListener('change', addList);
let price = 0; 

function addList(event) {
    let ul = document.getElementById('seleted-list');
    let selectedValue = selectbox.options[selectbox.selectedIndex].value;
    var child;
    for (child of ul.children) {
        if(child.getAttribute('value') == selectedValue)  
            return;
    }
    let selectedText = selectbox.options[selectbox.selectedIndex].text;
    let content = document.createTextNode(selectedText);
    let li = document.createElement('li');
    li.setAttribute('value', selectedValue);
    li.appendChild(content);
    ul.appendChild(li);

    calculate(li)
    totalAmount();
}

function totalAmount() {
    let amount = document.getElementById('amount');
    amount.textContent = "총 상품금액 " + price + "원";

}

function calculate(li) {

    switch(li.getAttribute('value')) {
        case 'option-a' : price += 39800; break;
        case 'option-b' : price += 49800; break;
        case 'option-c' : price += 59800; break;
    }
}