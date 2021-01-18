

var gameTable = document.getElementById("gameField");

var gameField = [];

var count = 1;
for (let i = 0; i < 7; i++) {
    let sloupec = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        let radek = document.createElement("td");
        let text = document.createTextNode(count);
        radek.id = String(count)
        radek.appendChild(text);
        sloupec.appendChild(radek);
        count++;
    }
    gameTable.appendChild(sloupec);
}

count = 1
for (let i = 0; i < 7; i++) {
    let sloupec = []
    for (let j = 0; j < 6; j++) {
        sloupec[j] = (document.getElementById(count))
        count++;
    }
    gameField[i] = sloupec;
}

for (let i = 0; i < 42; i++) {
    gameField[i] = document.getElementById(i+1);
    gameField[i].color = "none"
}

function restartGameField(gameField){
    for (let i = 0; i < 42; i++) {
        setField(gameField[i],"none")   
    }
}

// function to slowly go up a collum slowly checking each field

// function to check a single field

function setField(field,color){
    if (color === "red"){
        return "red"
    }
    if (color === "blue") {
        return "blue"
    }
    if (color === "none") {
        return "none"
    }
    console.log("error, input a correct color")
}

function checkGameOver(gameField){
    if (lineBust(gameField)===true || collumBust(gameField)===true) {
        return true
    }
    return false
}

function lineBust(gameField) {
    for (let i = 0; i < 24; i++) {
        if (gameField[i].color === gameField[i+6].color && gameField[i+6].color === gameField[i+12].color && gameField[i+12].color === gameField[i+18].color && gameField[i].color !== "none") {
            return true
        }
    }
    return false
}

function collumBust(gameField) {
    let list = [0,1,2,6,7,8,12,13,14,18,19,20,24,25,26,30,31,32,36,37,38]
    for (let num in list) {
        i = list[num]
        if (gameField[i].color === gameField[i+1].color && gameField[i+1].color === gameField[i+2].color && gameField[i+2].color === gameField[i+3].color && gameField[i].color !== "none") {
            return true
        }
    }
    return false
}

function diagonalBust(gameField) {
    if (gameField[0] === "zmenit") {
        return true
    }
    return false
}



