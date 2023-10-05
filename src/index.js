


document.addEventListener("DOMContentLoaded", () => {
  // your code here

// const select = document.createElement('select')


// const dropdown1 = document.createElement('option')
// dropdown1.value = 'high'
// dropdown1.textContent = 'High Priority'
// select.appendChild(dropdown1)

// const dropdown2 = document.createElement('option')
// dropdown2.value = 'medium'
// dropdown2.textContent = "Medium Priority"
// select.appendChild(dropdown2)

// const dropdown3 = document.createElement('option')
// dropdown3.textContent = "Low Priority"
// dropdown3.value = 'low'
// select.appendChild(dropdown3)
// document.querySelector('#create-task-form').appendChild(select)

  
  document.querySelector("#create-task-form").addEventListener("submit", (event) => {
    event.preventDefault();
  
    const newTaskDescription = document.querySelector("#new-task-description")
    const tasks = document.querySelector("#tasks");
    const taskTodo = document.createElement("li");
    const list = document.querySelector('#list')
    const select = document.querySelector('select')
    
    taskTodo.textContent = newTaskDescription.value + " ";
    console.log(newTaskDescription.value);
    // event.target.after(taskTodo)
    
    tasks.append(taskTodo);
    
    if (select.value === 'high') {
      taskTodo.style.color = 'red'
    } else if (select.value === 'medium') {
      taskTodo.style.color = 'gold'
    } else if (select.value === 'low') {
      taskTodo.style.color = 'green'
    }

    const button = document.createElement("button");
    taskTodo.append(button);
    button.innerText = "X";
    button.setAttribute('data-description', newTaskDescription)
    button.id = 'delete-btn';
    
    // button.addEventListener("click", () => {
    //   tasks.removeChild(taskTodo);
    // }) // ==> this one work

    button.addEventListener('click', (event) => {
      event.target.parentNode.remove(); // this one is the instructor's method
    })

    
    document.querySelector("#create-task-form").reset()

  })

});

