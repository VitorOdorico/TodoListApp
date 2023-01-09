let todoItems = []
let todoInput = document.querySelector('.todo-input');
const completedTodosDivs = document.querySelector('.completed-todos');
const uncompletedTodosDivs = document.querySelector('.uncompleted-todos');

window.onload = () => {};

todoInput.onkeyup((e) =>{
    let value = e.target.value.replace(/^\s+/, "")
    if(value && e.keyCode === 13){
        addTodo(value)
        todoInput.value = ''
        todoInput.focus()
    }
})

function addTodo(text){

}

function removeTodo(id){

}

function markAsComplete (id){

}

function markAsUncompleted(id){

}

function save(){

}

function reder(){
    
}

function saveAsRender(){
    save()
    reder()
}

function createTodoElement(todo){

}