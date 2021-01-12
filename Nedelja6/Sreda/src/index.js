import funkcije from "./service.js"

const todoInput = document.querySelector(`.todo-input`)
const todoBtn = document.querySelector(`.todo-button`)
const todoList = document.querySelector(`.todo-list`)



funkcije.data.forEach(el => {
    const todoDiv = document.createElement(`div`)
    todoDiv.classList.add(`todo`)
    //pravim li
    const newTodo = document.createElement(`li`)
    newTodo.textContent = el.desc
    newTodo.classList.add(`todo-item`)
    todoDiv.appendChild(newTodo)
    //check button
    const checkBtn = document.createElement(`button`)
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`
    checkBtn.classList.add(`check-btn`)
    todoDiv.appendChild(checkBtn)

    const deleteBtn = document.createElement(`button`)
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`
    deleteBtn.classList.add(`delete-btn`)
    todoDiv.appendChild(deleteBtn)

    todoList.appendChild(todoDiv)
    deleteBtn.addEventListener(`click`,()=>{
        deleteBtn.parentElement.remove()
        funkcije.deleteById()
    })
    checkBtn.addEventListener(`click`, ()=>{
        checkBtn.parentElement.classList.toggle(`completed`)
    })
});
todoBtn.addEventListener(`click`, (e) =>{
    e.preventDefault()

    const todoDiv = document.createElement(`div`)
    todoDiv.classList.add(`todo`)
    //pravim li
    const newTodo = document.createElement(`li`)
    newTodo.innerText = todoInput.value
    newTodo.classList.add(`todo-item`)
    todoDiv.appendChild(newTodo)
    //check button
    const checkBtn = document.createElement(`button`)
    checkBtn.innerHTML = `<i class="fas fa-check"></i>`
    checkBtn.classList.add(`check-btn`)
    todoDiv.appendChild(checkBtn)

    const deleteBtn = document.createElement(`button`)
    deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`
    deleteBtn.classList.add(`delete-btn`)
    todoDiv.appendChild(deleteBtn)

    todoList.appendChild(todoDiv)

    let item = {
        desc: todoInput.value,
        done: checkBtn
    }
    funkcije.add(item)

    deleteBtn.addEventListener(`click`,()=>{
        deleteBtn.parentElement.remove()
        funkcije.deleteById()
    })
    checkBtn.addEventListener(`click`, ()=>{
        checkBtn.parentElement.classList.toggle(`completed`)
    })
})
console.log(funkcije.data)