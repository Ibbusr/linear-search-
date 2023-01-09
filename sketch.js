
var arr2 = []
var evenList = []
var oddList = []
var table = []

// creating a list of numbers from 1 - 1000
for (var i = 0; i <= 1000; i++) {
    arr2.push(i)
}

// creating separate list for odd and even numbers from a given array
for (var i = 0; i < 1000; i++) {
    if (arr2[i] % 2 === 0) {
        evenList.push(arr2[i])
    }
    else {
        oddList.push(arr2[i])
    }
}

console.log(evenList)
console.log(oddList)

//creating number tables in series 20
for (var i = 0; i <= 20; i++) {
    table.push(23 * i)
}
console.log(table)

// linear search
var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
for (var i = 0; i <= arr2.length; i++) {
    if (arr2[i] === 11) {
        // adding one to make sure the serial number in my list starts from 1 not zero
        index  = i+1
        // displaying the position of my number in the list of numbers
        console.log("Number found @" + index )
    }
   
}