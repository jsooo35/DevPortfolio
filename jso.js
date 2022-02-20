

// Objects
// Things on the left are called keys and the ones on the right are called values
// Objects can be useful when listing a bunch of keys and values but not good if you want them in order
let shotoOne = {
    name: 'Ryu',
    style: 'shoto',
    color: 'red and white',
    position: 1
}


let shotoThree = {
    name: 'Akuma',
    style: 'Demon flipping Shoto',
    color: 'purple and red',
    position: 10
}

//You can put Arrays into Objects and create Objects with arrays

let streetFighter = [
    {
        name: 'ryu',
        color: 'white and red'
    },
    {
        name: 'ken',
        color: 'red and black'
    }
]


// Array
let bigFour = ['Tanjiro', 'Nezuko', 'Inosuke', 'Zenitsu'];



// Function are a type of value that have a specific purpose or action
// How to read a function:
/* "There's a function called makeMoreExciting that takes in a string and returns a new copy of that string
    that has a bunch of exclamation points at the end".
*/

function makeMoreExciting(string){
    return string + "?!?!?"
}