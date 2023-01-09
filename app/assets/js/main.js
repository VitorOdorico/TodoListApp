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

}

function render(){

}

function saveAsRender(){
    save()
    render()
}

function createTodoElement(todo){

}