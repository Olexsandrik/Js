document.addEventListener("DOMContentLoaded", () => {
    const boardSize = 5;
    let clickCount = 0;
    let predefinedBoards = [];
    let currentBoardIndex = 0;

    const gameBoard = document.getElementById('game-board');
    const restartButton = document.getElementById('restart-button');
    const resetButton = document.getElementById('reset-button');
    const clickCounter = document.getElementById('click-counter');
    const winClicksCounter = document.getElementById('win-clicks-counter');

    const buttons = [];

   
    fetch('https://Olexandrik.github.io/Js/LAB6/api/GameSpace.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            predefinedBoards = data;
            initBoard(true); 
        })
        .catch(error => console.error('Error loading game boards:', error));

    
    function getRandomBoardIndex() {
        return Math.floor(Math.random() * predefinedBoards.length);
    }

    
    function initBoard(isRandom = false) {
        if (predefinedBoards.length === 0) return;
        if (isRandom) {
            currentBoardIndex = getRandomBoardIndex();
        }
        const selectedBoardData = predefinedBoards[currentBoardIndex];
        const selectedBoard = selectedBoardData.board;
        const clicksToWin = selectedBoardData.clicks;

        gameBoard.innerHTML = '';
        clickCount = 0;
        updateClickCounter();
        updateWinClicksCounter(clicksToWin);

        for (let i = 0; i < boardSize; i++) {
            buttons[i] = [];
            for (let j = 0; j < boardSize; j++) {
                const button = document.createElement('div');
                button.classList.add('button');
                if (selectedBoard[i][j] === 0) {
                    button.classList.add('off');
                }
                button.addEventListener('click', () => toggleLights(i, j));
                gameBoard.appendChild(button);
                buttons[i][j] = button;
            }
        }
    }

    // Update click counter
    function updateClickCounter() {
        clickCounter.textContent = `Clicks: ${clickCount}`;
    }

    // Update win clicks counter
    function updateWinClicksCounter(clicksToWin) {
        winClicksCounter.textContent = `Clicks to win: ${clicksToWin}`;
    }

    // Toggle lights on the board
    function toggleLights(x, y) {
        clickCount++;
        updateClickCounter();
        toggleButton(x, y);
        if (x > 0) toggleButton(x - 1, y);
        if (x < boardSize - 1) toggleButton(x + 1, y);
        if (y > 0) toggleButton(x, y - 1);
        if (y < boardSize - 1) toggleButton(x, y + 1);
        checkWin();
    }

    // Toggle individual button
    function toggleButton(x, y) {
        buttons[x][y].classList.toggle('off');
    }

    // Check if the player has won
    function checkWin() {
        let allOff = true;
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                if (!buttons[i][j].classList.contains('off')) {
                    allOff = false;
                    break;
                }
            }
        }
        if (allOff) {
            setTimeout(() => {
                alert(`You won in ${clickCount} clicks!`);
                console.log('You won the game!');
            }, 100);
        }
    }

   
    restartButton.addEventListener('click', () => initBoard(true));

 
    resetButton.addEventListener('click', () => initBoard(false));

   
});
