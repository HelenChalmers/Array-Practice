const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

// const body = document.querySelector("body");
// const script = document.querySelector("script");
// const mainContent = document.createElement("div");
// mainConent.setAttribute("id", "planets");
// body.insertBefore(mainContent, script);



/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

planets.forEach(function(index){
    planetEl.innerHTML +=
    `<h2>${index}</hs>`
});

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
// const newString = String.prototype.toUpperCase.call(planets);

// console.log(newString);

newArray = planets.map(function(str){
    return " " + str.charAt(0).toUpperCase() + str.slice(1);
  });

  planetEl.innerHTML += `<h2>${newArray}</h2>`;

  console.log(newArray);



// let properPlanets = planets.map((color) =>{
    
//     let wordArray =  color.split("");
//     console.log("step one", wordArray);
//     let firstLetter = color.charAt(0).toUpperCase();
//     console.log("step 2", firstLetter);

//     // let upperCaseArray = firstLetter.toUpperCase();
    
//     return upperCaseArray.join("");
//   });

// planets.map()

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes


*/

function addArrayToDOM(array){
    array.forEach(function(index){
        planetEl.innerHTML +=
            `<h2>${index}</h2>`
    })
}

addArrayToDOM(planets);


const filterPlanet = planets.filter(function(E) {
    return E.includes("e") + E.includes("E")
})

addArrayToDOM(filterPlanet);

// planetEl.innerHTML += `<h2>${filterPlanet}</h2> `
// console.log(filterPlanet);

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reducedWords = words.reduce(function(currentTotal, next) {
    return currentTotal + " " + next

})

console.log(reducedWords)
planetEl.innerHTML += `<h2>${reducedWords}</h2>`