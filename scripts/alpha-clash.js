
// function play() {
//     // Step-1 : hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // step 2: Show the PlayGround
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden')
// }
function handlekeyboardKeyUpEvent(event) {
    const playerPressed = event.key;
    console.log('player prassed',playerPressed)

    //  Stop the game if prassed 'Esc'
    if(playerPressed==='Escape'){
        gameOver()
    }

    // Get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currenAlphabet = currentAlphabetElement.innerText;
    const expectedAlphebet = currenAlphabet.toLowerCase()
    console.log(playerPressed,expectedAlphebet)

    // check matched or not

    if(playerPressed === expectedAlphebet){
        console.log('you win the game');


        const currentScore = getTextElementValueById('current-score')
        const updateScore = currentScore + 1;
        setTextElementValueById('current-score', updateScore)
        // -------------------------------
//      // Update score:
//     //  1. get the current score
//     const currentScoreElement = document.getElementById('current-score');
//     const currentScoreText = currentScoreElement.innerText;
//     const currentScore = parseInt(currentScoreText)
//     console.log(currentScore)

//     // 2. Increse the score by 1
//    const newScore = currentScore + 1;
//     // 3. Show the update score
//    currentScoreElement.innerText =newScore
//     // start a new round

      removeBachGroundColorById(expectedAlphebet);
        continueGame();
    }
    else{
        console.log('you miss. You lose a life')


        const currentLife = getTextElementValueById('current-life');
        const updateLife = currentLife - 1 ;
        setTextElementValueById('current-life',updateLife)

        if(updateLife ===0){
            gameOver()
        }
        // --------------------------------------------------
        // // Step 1 . get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement. innerText;
        // const currentLife = parseInt(currentLifeText)
        // // step 2. redious the life count
        // const newLife = currentLife - 1;
        // // Step 3. display the update life count
        // currentLifeElement.innerText = newLife
    }
}
document.addEventListener('keyup',handlekeyboardKeyUpEvent)

function continueGame() {
    //step 1 : generate a rendom alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet',alphabet)

    // set randomly generated alphabet to the screen (Show it)
    const currentAlphabetElement =document.getElementById('current-alphabet');
    currentAlphabetElement.innerText =alphabet

    // set background color
    setbackgroundColorById(alphabet)
}


function play() {
// hide everything show only playground

    hideElementById('home-screen');
    hideElementById('finale-score')
    showElementById('play-ground');

//  reset and score life
setTextElementValueById('current-life',5);
setTextElementValueById('current-score',0)

    continueGame()
}

function gameOver() {
    hideElementById('play-ground');
    showElementById('finale-score')
    // update final score
    // 1. get the final score

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore)
    setTextElementValueById('last-score',lastScore)

    //  clear the selected alphabet highlight
    const currenAlphabet = getElementTextById('current-alphabet');
    // console.log(currenAlphabet)
    removeBachGroundColorById(currenAlphabet)
}