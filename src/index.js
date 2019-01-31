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
    let color = colors[index];
    const colorButton = document.createElement('button');
    colorButton.textContent = color;
    colorButton.value = color;
    colorButton.classList.add('color-button');
    colorButton.id = color;

    colorButton.addEventListener('click', function() {
        console.log(colorButton.value + ' was clicked!');
    });

    colorButtonsNode.appendChild(colorButton);
}