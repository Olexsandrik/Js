const myBtn = document.getElementById('start'); 
const objectContainer = document.querySelector('.sub__container');  
const colorSelect = document.getElementById('color__select'); 
const mainContainer = document.querySelector(".container");



let countdownInterval;
let score=0;
function GameOver(){
    alert(`GameOver, your total score:${score}`);

}


function startCountdown(timeLeft) {
    const clickDisplay = document.getElementById('click');

    
    if (typeof countdownInterval !== 'undefined') {
        clearInterval(countdownInterval); 
    }

    countdownInterval = setInterval(() => {
        if (timeLeft > 0) {
            timeLeft--; 
            clickDisplay.textContent = `time left for click: ${timeLeft}`;
        } else {
            clearInterval(countdownInterval); 
            GameOver();
        }
    }, 500); 
}





  
function Eazy(){  
    let timeEazy = 6;
   
    let htmlpage = '';
        objectContainer.style.display = "none";
        const selectedColor = colorSelect.value;
       
        htmlpage += `
        <p id="score" class="score">score: ${score} </p>
        <p id="click" class="click">time left for click: 0</p>
        <div class="mainContainer">
            <div class="EazyContainer">
            <div id="colorSquare" class="colorSquare" style="width: 100px; height: 100px; background-color: ${selectedColor};"></div>
        </div>
       
        `;

    
     
        mainContainer.innerHTML = htmlpage;
        startCountdown(timeEazy);
       
        const colorSquare = document.getElementById('colorSquare');
        
    
        
        colorSquare.addEventListener("click", () => {
            score++; 
           
            document.getElementById("score").textContent = `score: ${score}`; 
            
          
            timeEazy=6;
            startCountdown(timeEazy);
          
    
            const maxRandomX = 250; 
            const maxRandomY = 250; 
            
            const randomX = Math.floor(Math.random() * maxRandomX);
            const randomY = Math.floor(Math.random() * maxRandomY);



            colorSquare.style.left = randomX + 'px';
            colorSquare.style.top = randomY + 'px';



        });
}



function Normal(){
 let timeNorm=4
    let htmlpage = '';
    objectContainer.style.display = "none";
    const selectedColor = colorSelect.value;
   
    htmlpage += `
    <p id="score" class="score">score: ${score} </p>
    <p id="click" class="click">time left for click: 3</p>
    <div class="mainContainer">
        <div class="normalContainer">
        <div id="colorSquare" class="colorSquare" style="width: 90px; height: 90px; background-color: ${selectedColor};"></div>
    </div>
    `;

   
   
    mainContainer.innerHTML = htmlpage;
   
  startCountdown(timeNorm);

    const colorSquare = document.getElementById('colorSquare');
    

    
    colorSquare.addEventListener("click", () => {
        score++; 
      
        document.getElementById("score").textContent = `score: ${score}`; 
        
      

        timeNorm=4;
        startCountdown(timeNorm);

        const maxRandomX = 600; 
        const maxRandomY = 600; 
        
        const randomX = Math.floor(Math.random() * maxRandomX);
        const randomY = Math.floor(Math.random() * maxRandomY);
        
    
        colorSquare.style.left = randomX + 'px';
        colorSquare.style.top = randomY + 'px';



    });
}

function Hard(){
    let timeHard=3;
    let htmlpage = '';
    objectContainer.style.display = "none";
    const selectedColor = colorSelect.value;
   
    htmlpage += `
    <p id="score" class="score">score: ${score} </p>
    <p id="click" class="click">time left for click: 2</p>
    <div id="colorSquare" class="colorSquare" style="width: 40px; height: 40px; background-color: ${selectedColor};"></div>
    `;

   
  
    mainContainer.innerHTML = htmlpage;
   


    startCountdown(timeHard); 
    

    const colorSquare = document.getElementById('colorSquare');
    

    
    colorSquare.addEventListener("click", () => {
        score++; 
    
        document.getElementById("score").textContent = `score: ${score}`; 
        
        timeHard=3;
        startCountdown(timeHard); 


        const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); 
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); 
        
    
        colorSquare.style.left = randomX + 'px';
        colorSquare.style.top = randomY + 'px';



    });
}








function startGame(){
    const selectMode = document.getElementById('levels');
  
    if(selectMode.value==="izi"){
        Eazy();
       
    }
    else if(selectMode.value==="normal"){
        Normal();
    }
    else if(selectMode.value==="hard"){
        Hard();
    }
    else{
        console.log("Error");
    }    
}

myBtn.addEventListener('click', startGame);