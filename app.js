let inputField = document.getElementById('TODOfield');
let submitButton = document.getElementById('submitButton');
let toDoSection = document.getElementById('toDoSection');
let inProgressSection = document.getElementById('inProgressSection')
let completedSection = document.getElementById('completedSection')
let preventDefault = document.getElementById('formSubmit').addEventListener('click', function (event) {
    event.preventDefault()
});
let allToDos = document.getElementById('allToDos');
let allInProgress = document.getElementById('allInProgress')
let allCompleted = document.getElementById('allCompleted');



let counter = 1;
const addTODO = (event) => {
    event.preventDefault()
    if (inputField.value === '') {
        inputField.classList.add('danger')
        return
    } else {
        inputField.classList.remove('danger')
    }
    let addP = document.createElement('p');
    addP.innerHTML =
        `<div id= ${counter++} class= 'singlePItem'>
        <div>${inputField.value}</div> 
        <div class= 'buttonContainer'> 
        <button onclick='TODO(event)' class='TODOItem hidden'>ToDo</button>
        <button onclick='inProgressTODO(event)' class='inProgressItem'>In Progress </button>
        <button onclick='completedTODO(event)' class='completedItem' >Complete </button>
        <button onclick='deleteTODO(event)' class='deleteSinglePItem'><img src = "./imgs/trash.svg" alt="trash" class= 'trash' /> </button>
        </div>
        </div>
        </div>`;
    allToDos.append(addP)
    inputField.value = '';
}

let ToDoArr = document.getElementsByClassName('singlePItem');

const TODO = (event) => {
    allToDos.append(event.target.parentElement.parentElement);

    for (let i = 0; i < ToDoArr.length; i++) {
        if (ToDoArr[i].parentElement.classList.contains('allToDos')) {
            ToDoArr[i].children[1].children[0].classList.add('hidden')
            ToDoArr[i].children[1].children[1].classList.remove('hidden')
            ToDoArr[i].children[1].children[2].classList.remove('hidden')
        }
        console.log(ToDoArr[i].children[1].children[0]);

    }
}

const inProgressTODO = (event) => {
    allInProgress.append(event.target.parentElement.parentElement);

    for (let i = 0; i < ToDoArr.length; i++) {
        if (ToDoArr[i].parentElement.classList.contains('allInProgress')) {
            ToDoArr[i].children[1].children[0].classList.remove('hidden')
            ToDoArr[i].children[1].children[1].classList.add('hidden')
            ToDoArr[i].children[1].children[2].classList.remove('hidden')
            ToDoArr[i].classList.remove('completed');
            ToDoArr[i].classList.add('inProgress');
        }
        console.log(ToDoArr[i].children[1].children[0]);

    }
}


const completedTODO = (event) => {
    allCompleted.append(event.target.parentElement.parentElement);

    for (let i = 0; i < ToDoArr.length; i++) {
        if (ToDoArr[i].parentElement.classList.contains('allCompleted')) {
            ToDoArr[i].children[1].children[0].classList.remove('hidden')
            ToDoArr[i].children[1].children[1].classList.remove('hidden')
            ToDoArr[i].children[1].children[2].classList.add('hidden')
            ToDoArr[i].classList.add('completed');
            ToDoArr[i].classList.remove('inProgress');
        }
        console.log(ToDoArr[i].children[1].children[0]);

    }
}

const deleteTODO = (event) => {
    event.currentTarget.parentElement.parentElement.remove()
}



submitButton.addEventListener('click', addTODO)





