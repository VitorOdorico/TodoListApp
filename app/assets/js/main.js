let todoItems = []
let todoInput = document.querySelector('.todo-input');
const completedTodosDivs = document.querySelector('.completed-todos');
const uncompletedTodosDivs = document.querySelector('.uncompleted-todos');

window.onload = () => {
    let storageTodoItems = localStorage.getItem('todoItems')
    if(storageTodoItems !== null){
        todoItems = JSON.parse(storageTodoItems)
    }
    render()
};

todoInput.onkeyup = ((e) =>{
    let value = e.target.value.replace(/^\s+/, "")
    if(value && e.keyCode === 13){
        addTodo(value)
        todoInput.value = ''
        todoInput.focus()
    };
})

function addTodo(text){
    todoItems.push({
        id: Date.now(),
        text,
        completed: false
    });
    saveAsRender();
}

function removeTodo(id){

}

function markAsComplete (id){

}

function markAsUncompleted(id){

}

function save(){
    localStorage.setItem('todoItems', JSON.stringify(todoItems))

}

function render(){
    let unCompletedTodos = todoItems.filter(item => !item.completed)
    let completedTodos = todoItems.filter(item => item.completed)

    completedTodosDivs.innerHTML=''
    uncompletedTodosDivs.innerHTML=''

    if(unCompletedTodos.length > 0){
        unCompletedTodos.forEach(todo => {
            uncompletedTodosDivs.append(createTodoElement(todo))
        })
    }else{
        uncompletedTodosDivs.innerHTML = `<div class='empty'>No uncompleted mission </div>`
    }

    if(completedTodos.length > 0){
        completedTodosDivs.innerHTML = `<div class='completed-title'>Completed (${completedTodos.length} / ${todoItems.length}) </div>`
        completedTodosDivs.forEach(todo =>{
            completedTodosDivs.append(createTodoElement(todo))
        })
    }
}

function saveAsRender(){
    save()
    render()
}

function createTodoElement(todo){

}