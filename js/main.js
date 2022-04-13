//use https://dictionaryapi.dev/ to check validity

//https://wordsapiv1.p.mashape.com/words/?letters=6?random=true

//Choose new word upon refresh: ADD THIS FUNCTIONALITY
const wordArr = ['APPLE', 'QUALM', 'MERGE', 'WATER', 'SMELT', 'PASTE', 'BOXES', 'VODKA', 'PORCH', 'THEIR', 'MANGO', 'WASTE', 'COMMA', 'COLON', 'QUEST', 'POLKA', 'PATIO', 'COCOA', 'GIANT', 'SHAPE', 'QUITE', 'BERRY', 'MOCHA', 'LATTE', 'GLASS', 'GRASS', 'SPOON', 'PLANT', 'BEETS']


const theWord = wordArr[Math.floor(28 * Math.random())];

/* fetch(`https://wordsapiv1.p.mashape.com/words/?letters=6?random=true`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            
            console.log(data);
            theWord = data.word;
            
        })
        .catch(err => {
            console.log(`error ${err}`)
        });



 */
let theWord_ = theWord.split('');
let placeHolder = 1
let wordNo = 1

//Store letter into correct spaces
Array.from(document.getElementsByClassName('keyboard'))
    .forEach(key => key.addEventListener('click', storeX));

function storeX (click) {
    x = click.target.innerText;
    if (placeHolder < 6) {
        document.getElementById(`guess${wordNo}-letter${placeHolder}`).innerText = x;
        placeHolder++;
    }
}

//Backspace functionality
document.getElementById("backSpace").addEventListener('click', backSpace);

function backSpace() {
    if (placeHolder > 1) placeHolder -= 1;
    document.getElementById(`guess${wordNo}-letter${placeHolder}`).innerText = '';
}

//Check word functionality
document.querySelector("#checkAnswer").addEventListener('click', checkAnswer)
function checkAnswer() {
    let word = [];
    for (let i = 1; i < 6; i++) {
        word.push(document.getElementById(`guess${wordNo}-letter${i}`).innerText)
    }

    
    word = word.join('');
    //CHECK WHETHER THE WORD IS LONG ENOUGH
    if (word.length !== 5) {
        alert('Not enough letters')
    }


    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
    //CHECK WHETHER WORD IS AN ACTUAL WORD OR NOT:
            if (data.title === "No Definitions Found") {
                alert ('Not in word list')
            }
    //ALERT CORRECT LETTERS & CORRECT LETTER PLACEMENT        
            else {
                for (let i = 1; i < 6; i++) {
                    if (document.getElementById(`guess${wordNo}-letter${i}`).innerText === theWord[i - 1]) {
                        document.getElementById(`guess${wordNo}-letter${i}`).style.background = 'rgb(85,140,81)';
                        theWord_[i - 1] = ' ';
                        document.getElementById(`${document.getElementById(`guess${wordNo}-letter${i}`).innerText}`).style.background = 'rgb(85,140,81)';
                    } else if (theWord_.includes(document.getElementById(`guess${wordNo}-letter${i}`).innerText)) {
                        document.getElementById(`guess${wordNo}-letter${i}`).style.background = 'rgb(180,158,67)';
                        document.getElementById(`${document.getElementById(`guess${wordNo}-letter${i}`).innerText}`).style.background = 'rgb(180,158,67)';
                    } else if (!theWord.includes(document.getElementById(`guess${wordNo}-letter${i}`).innerText)) {
                        document.getElementById(`${document.getElementById(`guess${wordNo}-letter${i}`).innerText}`).style.background = 'black';
                    }
                }
                if (word === theWord) {
                    alert('Bingo!')
                } else {
                    wordNo += 1;
                    placeHolder = 1;
                }
            }
            
        console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
    
    
    
    
}