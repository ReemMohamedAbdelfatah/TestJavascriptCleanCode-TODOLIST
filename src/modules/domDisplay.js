import Storage from './localStorage.js';
import returnImg from '../assets/return.svg';
import kebab from '../assets/kebab.svg';

document.getElementById('returnImg').src = returnImg;
class DomToDo {
  static displayToDo() {
    const todo = Storage.getToDo();

    todo.forEach((todo) => {
      DomToDo.addToDoList(todo);
    });
  }

  static addToDoList(todo) {
    const ulContainer = document.getElementById('tbody');
    const row = document.createElement('tr');

    if (todo.completed) {
      row.innerHTML = `
    <td> <input class='check'  id='checkBox' type="checkbox" checked /><td>
    <td><p class='paragragh strike-through'> ${todo.description}</p><td>
    <td class='hide'>${todo.id}</td>
    <td><img class='kebabImg' src="${kebab}" alt="" /></td>
    <td><a href="#" class='delete'>🗑</a><td>
    `;
    } else {
      row.innerHTML = `
    <td> <input class='check'  id='checkBox' type="checkbox" /><td>
    <td><p class='paragragh'> ${todo.description}</p><td>
    <td class='hide'>${todo.id}</td>
    <td><img class='kebabImg' src="${kebab}" alt="" /></td>

    <td><a href="#" class='delete'>🗑</a><td>

    `;
    }

    ulContainer.appendChild(row);
  }

  static deleteTodo(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearField() {
    document.getElementById('todo-input').value = '';
  }
}

export default DomToDo;
