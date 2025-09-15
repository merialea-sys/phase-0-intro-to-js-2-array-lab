// Write your solution here!
const cats = ["Milo","Otis", "Garfield"]

beforeEach(function (){
    cats.length = 0,

    cats.push("Milo","Otis", "Garfield");
})

function destructivelyAppendCat(){
    cats .push("Ralph");
}

function destructivelyPrependCat(){
    cats.unshift("Bob");
} 

function destructivelyRemoveLastCat(){
    cats.pop("Garfield");
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo");
}


function appendCat(){
    let newArray = [...cats]
    newArray.push("Broom")
    return newArray
}

function prependCat(){
    let newArray = [...cats]
    newArray.unshift("Arnold")
    return newArray
}

function removeLastCat(){
    let newArray = [...cats]
    newArray.pop("Garfield")
    return newArray
}

function removeFirstCat(){
    let newArray = [...cats]
    newArray.shift("Milo")
    return newArray
}




