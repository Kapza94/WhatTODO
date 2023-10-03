let inputField = document.getElementById('TODOfield');
let submitButton = document.getElementById('submitButton');
let toDoSection = document.getElementById('toDoSection');
let inProgressSection = document.getElementById('inProgressSection')
let completedSection = document.getElementById('completedSection')
let preventDefault = document.getElementById('formSubmit').addEventListener('click', function (event) {
    event.preventDefault()
});
let allToDos = document.getElementById('allToDos');

let counter = 1;
const addTODO = (event) => {
    event.preventDefault()
    let addP = document.createElement('p');
    addP.innerHTML = `<div id= ${counter++} class= 'singlePItem'><div>${inputField.value}</div> <button onclick='removeTODO(event)' class='removeSinglePItem'>x</button></div>`;
    allToDos.append(addP)

    console.log(counter)
}

const removeTODO = (event) => {
    event.target.parentElement.parentElement.remove()
}

submitButton.addEventListener('click', addTODO)





let toDoArr = [];
let inProgressArr = [];
let completedArr = [];