//Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)

function ThroughTwenty(number){
    let newArray = []
    for(i=1;i<=number;i++){
        newArray.push(i)
    }
    return newArray
}

console.log(ThroughTwenty(20))

// Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)

function evensToTwenty(number){
    let newArray = []
    for(i=1;i<number;i++){
        if(i%2==0){
        newArray.push(i)
        }
    }
    return newArray
}

console.log(evensToTwenty(21))

// Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)

function oddsToTwenty (number){
    let newArray = []
    for(i=1;i<number;i++){
        if(i%2==1){ 
        newArray.push(i)
        }
    }
    return newArray 
}

console.log(oddsToTwenty(21))

// Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)

function multiplesOfFive(number){
    let newArray = []
    for(i=1;i<number;i++){
        if(i%5==0){
        newArray.push(i)
        }  
    }
    return newArray
}

console.log(multiplesOfFive(100))

// Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)

function squareNumbers(number){
    let newArray = []
    for(let i = 1;i<=number;i++){
        if(i**(1/2) % 1==0){   
        newArray.push(i)
        }
    }
        return newArray
    }

console.log(squareNumbers(100))


// Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)

function countingBackwards(number){
    let newArray = []
    for(let i = 20;i >= number;i--){
        newArray.push(i)
    }
    return newArray
}

console.log(countingBackwards(1))



// Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)

function evenNumbersBackwards(number){
    let newArray = []
    for(i=20;i>number;i--){
        if(i%2==0){
            newArray.push(i)
        }
    }
    return newArray
}
console.log(evenNumbersBackwards(1))


// Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)

function oddNumbersBackwards(number){
    let newArray = []
    for(i=20;i>number;i--){
        if(i%2==1){
            newArray.push(i)
        }
    }
    return newArray
}
console.log(oddNumbersBackwards(1))

// Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)

    function multiplesOfFiveBackwards(number){
        let newArray = []
        for(i=100;i>number;i--){
            if(i%5==0){
                newArray.push(i)
            }
        }
        return newArray
    }

console.log(multiplesOfFiveBackwards(1))
// Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)

function squareNumbersBackwards(number){
    let newArray = []
    for(let i = 100;i>=number;i--){
        if(i**(1/2) % 1==0){   
        newArray.push(i)
        }
    }
    return newArray
}
console.log(squareNumbersBackwards(1))

    





