const imageNum=5;
const body = document.querySelector('body');
function setImage(randomNum){
    const image = body.style;
    image.background=`black url('img/${randomNum+1}.jpg') no-repeat center center / cover`;
    image.height='100vh';
}

function getRandomNum(){
    const random =Math.floor(Math.random()*imageNum);
    return random;
}
function init(){
    const randomNum = getRandomNum();
    setImage(randomNum);
}
init();