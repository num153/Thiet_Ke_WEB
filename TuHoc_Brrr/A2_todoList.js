let arr = [];
renderTodo();
function renderTodo(){
  let todoHTLM ='';
      for(let i=0;i<arr.length;i++){
    const todo = arr[i];
    const html = `<p>${todo}<\p>`;
    todoHTLM +=html;
} document.querySelector('.js-todoList').innerHTML = todoHTLM;
}

function addTodo() {
  const inputElement = document.getElementById('input-text');
  const name = inputElement.value; //lay value cua input, truong hop nay la text
  arr.push(name);
  console.log(arr);
  inputElement.value=''; //reset input
  renderTodo();
}
