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
        <button onclick='TODO(event)' class='TODOItem'> ToDo </button>
        <button onclick='inProgressTODO(event)' class='inProgressItem'>In Progress </button>
        <button onclick='completedTODO(event)' class='completedItem'>Complete </button>
        <button onclick='deleteTODO(event)' class='deleteSinglePItem'>delete </button>
        </div>
        </div>
        </div>`;
    allToDos.append(addP)
    inputField.value = '';
}


const TODO = (event) => {
    allToDos.append(event.target.parentElement.parentElement);
}

const inProgressTODO = (event) => {
    allInProgress.append(event.target.parentElement.parentElement);
    // allToDos.classList.add('inProgressItemHide')
    console.log(removeEvent);
}


const completedTODO = (event) => {
    allCompleted.append(event.target.parentElement.parentElement);
    console.log(allCompleted);
}

const deleteTODO = (event) => {
    event.target.parentElement.parentElement.remove()

}



submitButton.addEventListener('click', addTODO)





let toDoArr = [];
let inProgressArr = [];
let completedArr = [];