//get color-button node
const colorButtonsNode = document.getElementById('color-buttons');


//create array of colors
const colors = [
    'blue',
    'green',
    'red',
    'yellow'
];



//create button elements
//add text, class, and value to button
//append button to parent node

for(let index = 0; index < colors.length; index++) {
    let color = colors[index]; //create var that gets current color in loop
    const colorButton = document.createElement('button'); //creates new button for each color in loop
    colorButton.textContent = color; //creates the button text for each color in loop
    colorButton.value = color; //creates a value attribute in the button tag for each color in loop, assigns it that color value
    colorButton.classList.add('color-button'); //adds a new class attribute of 'color-button' to the button tag for each color in loop
    colorButton.id = color; //creates new id attribute in button tag for each color in loop

    colorButton.addEventListener('click', function() {
        console.log(colorButton.value + ' was clicked!');
    }); //waits for the buttons to be clicked to call this function and do something

    colorButtonsNode.appendChild(colorButton); //adds each new button created in loop to the parent node of colorButtonNode we defined first in script
}