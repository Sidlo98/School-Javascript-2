const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const output = document.querySelector("#output");

let todos = [];

const fetchTodos = async () => {
  const res = await fetch("http://localhost:8080/api/todos");
  const data = await res.json();

  todos = data;
  console.log(todos);
  listTodos();
};

fetchTodos();

const listTodos = () => {
  output.innerHTML = "";

  todos.forEach((todo) => {
    newTodo(todo);
  });
};

const newTodo = (todo) => {
  let card = document.createElement("div");
  card.classList.add("card", "p-3", "mb-3");

  let innerCard = document.createElement("div");
  innerCard.classList.add(
    "d-flex",
    "justfiy-content-between",
    "align-items-center"
  );

  let title = document.createElement("div");
  title.classList.add("title", "my-0");
  if (todo.completed) title.classList.add("completed");
  title.innerText = todo.title;

  title.addEventListener("click", () => updateTodo(todo));

  let button = document.createElement("button");
  button.classList.add("btn", "btn-sm", "btn-danger", "px-3");
  button.innerText = "X";

  button.addEventListener("click", () => deleteTodo(todo));

  innerCard.appendChild(title);
  innerCard.appendChild(button);
  card.appendChild(innerCard);
  output.appendChild(card);
};

const deleteTodo = async (todo) => {
  if(todo.completed){
    await fetch(`http://localhost:8080/api/todos/${todo._id}`, {
      method: "DELETE",
    });
    fetchTodos();
  } else {
    console.log('du måste klarmarkera todon först.')
  }
};

const updateTodo = (todo) => {
  fetch(`http://localhost:8080/api/todos/${todo._id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      completed: !todo.completed,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.status) fetchTodos();
    });
};

const createTodo = title => {
  fetch(`http://localhost:8080/api/todos/new`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      title
    })
  })
  .then(res => res.json())
  .then(data => {
    if(data.status)
    fetchTodos()
  })
}


form.addEventListener('submit', e => {
  e.preventDefault();

  if(input.value.trim() !== '') {
    createTodo(input.value);
    form.reset();
  }
})