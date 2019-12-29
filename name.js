const nameForm = document.querySelector('.nameForm');
const nameInput = nameForm.querySelector('.nameInput');
const helloNameH = document.querySelector('.helloNameH')

function helloName(userInput){
    nameForm.classList.add('dis-non');
    helloNameH.classList.add('show');
    helloNameH.innerText = `What a nice day, ${userInput}!`;
}
function saveNameLS(userInput){
    localStorage.setItem('userName',userInput);
}
function submitHandler(event){
    event.preventDefault();
    const userInput = nameInput.value;
    nameInput.value="";
    helloName(userInput);
    saveNameLS(userInput);
}
function init(){
    const name_LS = localStorage.getItem('userName');
    if(name_LS){
        helloName(name_LS);
    }else{
        nameForm.addEventListener('submit', submitHandler);
    }
    
}

init();
