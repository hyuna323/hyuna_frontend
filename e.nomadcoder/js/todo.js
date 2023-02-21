const toDoForm = document.getElementById("todo-form");

/* toDoInput을 전체 document에서 전체 HTML을 찾아볼 수 있음
  또는 toDoInput을 toDoForm안에서만 찾아 볼 수도 있음*/
const toDoInput = toDoForm.querySelector("input");
// id가 todo-form인 form안에서 input을 찾는 것

const toDoList = document.getElementById("todo-list");

// 1. todo 저장하기
// newTodo 그려질때마다 텍스트를 array에 push하기
const toDos = [];

function saveToDos() {
  localStorage.setItem("todos", JSON.stringify(toDos));
  // JSON,stringify는 javascript object나 array 또는 어떤 javascript 코드건 간에 string으로 만들어줌
}

// 지우는 button 함수 만들어 주기 (eventListener에 들어갈 함수)
function deleteToDo(event){
  const li = event.target.parentElement;
  
  // 버튼 클릭시 지워진다
  li.remove();
}

// localStorage
// 1. todo 저장  2. todo 불러오기

// todo 그리는 역할
// newTodo는 text가 됨
function paintToDo(newTodo){
  // li를 만듦
  // 변수 이름을 li라고 하지 않고 tomato라 고 적어도 됨 => html 태그의 이름으로 적을 필요는 없음
  const li = document.createElement("li");
  
  // span을 만듦
  // span이 li 안에 있지 않음
  const span = document.createElement("span");

  // span 안에 넣은 새로운 텍스트는 사용자가 form에서 우리에게 준 newTodo 값임
  span.innerText = newTodo;
  
  // append 하기 전에 삭제하는 button 만들기
  // click 이벤트가 필요함
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo)

  // append는 항상 맨뒤에 있어야 함 
  // 만든 span을 li안에 넣어줌
  // span은 li 안에 있어야 해 li는 span이라는 자식을 갖게 됨
  li.appendChild(span);

  // 위의 button을 li에 만들고자 함
  li.appendChild(button);

  // handleToDoSubmit에서 온 newTodo텍스트가 됨
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  // 비우기 전에 값을 저장
  const newTodo = toDoInput.value;
  // input의 현재 value를 새로운 변수에 복사 하는 것 그 후 뭘 하든 newToDo변수와 아무 상관 없음
  
  // enter 누를 시 input이 비워짐
  // ""(빈칸)으로 저장하여 결과화면에 띄어쓰기가 있음
  toDoInput.value = "";
  // newTodo를 toDos array에 push 하기
  toDos.push(newTodo);

  paintToDo(newTodo);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
