let placeHolder = 1
let wordNo = 1

//Store letter into correct spaces

document.querySelector("#Q").addEventListener('click', storeQ)
function storeQ () {
    storeX ('Q')
}
document.querySelector("#W").addEventListener('click', storeW)
function storeW () {
    storeX ('W')
}
document.querySelector("#E").addEventListener('click', storeE)
function storeE () {
    storeX ('E')
}
document.querySelector("#R").addEventListener('click', storeR)
function storeR () {
    storeX ('R')
}
document.querySelector("#T").addEventListener('click', storeT)
function storeT () {
    storeX ('T')
}
document.querySelector("#Y").addEventListener('click', storeY)
function storeY () {
    storeX ('Y')
}
document.querySelector("#U").addEventListener('click', storeY)
function storeY () {
    storeX ('Y')
}
document.querySelector("#I").addEventListener('click', storeY)
function storeY () {
    storeX ('Y')
}
document.querySelector("#O").addEventListener('click', storeO)
function storeO () {
    storeX ('O')
}
document.querySelector("#P").addEventListener('click', storeP)
function storeP () {
    storeX ('P')
}
document.querySelector("#A").addEventListener('click', storeA)
function storeA () {
    storeX ('A')
}
document.querySelector("#S").addEventListener('click', storeS)
function storeS () {
    storeX ('S')
}
document.querySelector("#D").addEventListener('click', storeD)
function storeD () {
    storeX ('D')
}
document.querySelector("#F").addEventListener('click', storeF)
function storeF () {
    storeX ('F')
}
document.querySelector("#G").addEventListener('click', storeG)
function storeG () {
    storeX ('G')
}
document.querySelector("#H").addEventListener('click', storeH)
function storeH () {
    storeX ('H')
}
document.querySelector("#J").addEventListener('click', storeJ)
function storeJ () {
    storeX ('J')
}
document.querySelector("#K").addEventListener('click', storeK)
function storeK () {
    storeX ('K')
}
document.querySelector("#L").addEventListener('click', storeL)
function storeL () {
    storeX ('L')
}
document.querySelector("#Z").addEventListener('click', storeZ)
function storeZ () {
    storeX ('Z')
}
document.querySelector("#X").addEventListener('click', storeXe)
function storeXe () {
    storeX ('X')
}
document.querySelector("#C").addEventListener('click', storeC)
function storeC () {
    storeX ('C')
}
document.querySelector("#V").addEventListener('click', storeV)
function storeV () {
    storeX ('V')
}
document.querySelector("#B").addEventListener('click', storeB)
function storeB () {
    storeX ('B')
}
document.querySelector("#N").addEventListener('click', storeN)
function storeN () {
    storeX ('N')
}
document.querySelector("#M").addEventListener('click', storeM)
function storeM () {
    storeX ('M')
}

//Is it possible to index the answers and use loops + an array to put the letters in the right place?
function storeX (x) {
    switch(wordNo, placeHolder) {
        case 1 && 1 : document.querySelector("#guess1-letter1").innerText = x 
        placeHolder = 2;
        break;
        case 1 && 2 : document.querySelector("#guess1-letter2").innerText = x 
        placeHolder = 3;
        break;
        case 1 && 3 : document.querySelector("#guess1-letter3").innerText = x 
        placeHolder = 4;
        break;
        case 1 && 4 : document.querySelector("#guess1-letter4").innerText = x 
        placeHolder = 5;
        break;
        case 1 && 5 : document.querySelector("#guess1-letter5").innerText = x 
        placeHolder = 6;
        break;
        case 2 && 1 : document.querySelector("#guess2-letter1").innerText = x 
        placeHolder = 2;
        break;
        case 2 && 2 : document.querySelector("#guess2-letter2").innerText = x 
        placeHolder = 3;
        break;
        case 2 && 3 : document.querySelector("#guess2-letter3").innerText = x 
        placeHolder = 4;
        break;
        case 2 && 4 : document.querySelector("#guess2-letter4").innerText = x 
        placeHolder = 5;
        break;
        case 2 && 5 : document.querySelector("#guess2-letter5").innerText = x 
        placeHolder = 6;
        break;
        case 3 && 1 : document.querySelector("#guess3-letter1").innerText = x 
        placeHolder = 2;
        break;
        case 3 && 2 : document.querySelector("#guess3-letter2").innerText = x 
        placeHolder = 3;
        break;
        case 3 && 3 : document.querySelector("#guess3-letter3").innerText = x 
        placeHolder = 4;
        break;
        case 3 && 4 : document.querySelector("#guess3-letter4").innerText = x 
        placeHolder = 5;
        break;
        case 3 && 5 : document.querySelector("#guess3-letter5").innerText = x 
        placeHolder = 6;
        break;
        case 4 && 1 : document.querySelector("#guess4-letter1").innerText = x 
        placeHolder = 2;
        break;
        case 4 && 2 : document.querySelector("#guess4-letter2").innerText = x 
        placeHolder = 3;
        break;
        case 4 && 3 : document.querySelector("#guess4-letter3").innerText = x 
        placeHolder = 4;
        break;
        case 4 && 4 : document.querySelector("#guess4-letter4").innerText = x 
        placeHolder = 5;
        break;
        case 4 && 5 : document.querySelector("#guess4-letter5").innerText = x 
        placeHolder = 6;
        break;
        case 5 && 1 : document.querySelector("#guess5-letter1").innerText = x 
        placeHolder = 2;
        break;
        case 5 && 2 : document.querySelector("#guess5-letter2").innerText = x 
        placeHolder = 3;
        break;
        case 5 && 3 : document.querySelector("#guess5-letter3").innerText = x 
        placeHolder = 4;
        break;
        case 5 && 4 : document.querySelector("#guess5-letter4").innerText = x 
        placeHolder = 5;
        break;
        case 5 && 5 : document.querySelector("#guess5-letter5").innerText = x 
        placeHolder = 6;
        break;
        case 6 && 1 : document.querySelector("#guess6-letter1").innerText = x 
        placeHolder = 2;
        break;
        case 6 && 2 : document.querySelector("#guess6-letter2").innerText = x 
        placeHolder = 3;
        break;
        case 6 && 3 : document.querySelector("#guess6-letter3").innerText = x 
        placeHolder = 4;
        break;
        case 6 && 4 : document.querySelector("#guess6-letter4").innerText = x 
        placeHolder = 5;
        break;
        case 6 && 5 : document.querySelector("#guess6-letter5").innerText = x 
        placeHolder = 6;
        break;
    }
}

//write using nested for loops?
//Backspace functionality
document.querySelector("#backSpace").addEventListener('click', backSpace)
function backSpace() {
    switch(wordNo, placeHolder) {
        case 1 && 2 : document.querySelector("#guess1-letter1").innerText = '' 
        placeHolder = 1;
        break;
        case 1 && 3 : document.querySelector("#guess1-letter2").innerText = '' 
        placeHolder = 2;
        break;
        case 1 && 4 : document.querySelector("#guess1-letter3").innerText = '' 
        placeHolder = 3;
        break;
        case 1 && 5 : document.querySelector("#guess1-letter4").innerText = '' 
        placeHolder = 4;
        break;
        case 1 && 6 : document.querySelector("#guess1-letter5").innerText = '' 
        placeHolder = 5;
        break;

        case 2 && 2 : document.querySelector("#guess2-letter1").innerText = '' 
        placeHolder = 1;
        break;
        case 2 && 3 : document.querySelector("#guess2-letter2").innerText = '' 
        placeHolder = 2;
        break;
        case 2 && 4 : document.querySelector("#guess2-letter3").innerText = '' 
        placeHolder = 3;
        break;
        case 2 && 5 : document.querySelector("#guess2-letter4").innerText = '' 
        placeHolder = 4;
        break;
        case 2 && 6 : document.querySelector("#guess2-letter5").innerText = '' 
        placeHolder = 5;
        break;
        
        case 3 && 2 : document.querySelector("#guess3-letter1").innerText = '' 
        placeHolder = 1;
        break;
        case 3 && 3 : document.querySelector("#guess3-letter2").innerText = ''
        placeHolder = 2;
        break;
        case 3 && 4 : document.querySelector("#guess3-letter3").innerText = '' 
        placeHolder = 3;
        break;
        case 3 && 5 : document.querySelector("#guess3-letter4").innerText = '' 
        placeHolder = 4;
        break;
        case 3 && 6 : document.querySelector("#guess3-letter5").innerText = '' 
        placeHolder = 5;
        break;
        
        case 4 && 2 : document.querySelector("#guess4-letter1").innerText = '' 
        placeHolder = 1;
        break;
        case 4 && 3 : document.querySelector("#guess4-letter2").innerText = '' 
        placeHolder = 2;
        break;
        case 4 && 4 : document.querySelector("#guess4-letter3").innerText = '' 
        placeHolder = 3;
        break;
        case 4 && 5 : document.querySelector("#guess4-letter4").innerText = '' 
        placeHolder = 4;
        break;
        case 4 && 6 : document.querySelector("#guess4-letter5").innerText = '' 
        placeHolder = 5;
        break;
        
        case 5 && 2 : document.querySelector("#guess5-letter1").innerText = '' 
        placeHolder = 1;
        break;
        case 5 && 3 : document.querySelector("#guess5-letter2").innerText = '' 
        placeHolder = 2;
        break;
        case 5 && 4 : document.querySelector("#guess5-letter3").innerText = '' 
        placeHolder = 3;
        break;
        case 5 && 5 : document.querySelector("#guess5-letter4").innerText = ''
        placeHolder = 4; 
        break;
        case 5 && 6 : document.querySelector("#guess5-letter5").innerText = '' 
        placeHolder = 5;
        break;
        
        case 6 && 2 : document.querySelector("#guess6-letter1").innerText = ''
        placeHolder = 1;
        break;
        case 6 && 3 : document.querySelector("#guess6-letter2").innerText = '' 
        placeHolder = 2;
        break;
        case 6 && 4 : document.querySelector("#guess6-letter3").innerText = '' 
        placeHolder = 3;
        break;
        case 6 && 5 : document.querySelector("#guess6-letter4").innerText = ''
        placeHolder = 4;
        break;
        case 6 && 6 : document.querySelector("#guess6-letter5").innerText = '' 
        placeHolder = 5;
        break;
    }
}

//Check word functionality
document.querySelector("#checkAnswer").addEventListener('click', checkAnswer)
function checkAnswer() {
    
}
function returnWord() {
    let word
    wordNo ? 1 : word = `${document.querySelector("#guess1-letter1").innerText}${document.querySelector("#guess1-letter2").innerText}${document.querySelector("#guess1-letter3").innerText}${document.querySelector("#guess1-letter4").innerText}${document.querySelector("#guess1-letter5").innerText}`
    return word
}

