function home(){
  let url = "http://127.0.0.1:5502/html/01_ediya_main.html";
  window.location = url;
}

function login(){
let url = "http://127.0.0.1:5502/html/02_ediya_login.html";
window.location = url;
}

// SNS Facebook
function sns_F(){
  let url = "https://www.facebook.com/iEDIYA";
  window.location = url;
}

// SNS Instargram
function sns_I(){
  let url = "https://www.instagram.com/ediya.coffee/";
  window.location = url;
}

// SNS Naver blog
function sns_N(){
  let url = "https://blog.naver.com/ediya-coffee";
  window.location = url;
}


// --------------------------------
// modal
const openButton = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button");
const openModal = () => {
  modal.classList.remove("on");
}
const colseModal = () => {
  modal.classList.add("on");
}
overlay.addEventListener("click", colseModal);
closeBtn.addEventListener("click", colseModal);
openButton.addEventListener("click", openModal);
