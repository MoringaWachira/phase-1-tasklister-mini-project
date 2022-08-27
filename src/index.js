document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildMyToDos(e.target.new_task_description.value)
    form.reset()

  })
});


function buildMyToDos(todo){
  let arr = [];
  const ul = document.getElementById("tasks")
  ul.textContent = todo

  let btn = document.createElement('button')
  ul.appendChild(btn)
  arr.push(todo)
  btn.addEventListener('click', handleDelete)
  btn.textContent = ' clear '
}

function handleDelete(eDelete) {
  eDelete.target.parentNode.remove()
}