const inquirer = require('inquirer');  // Importing inquirer module for user prompts
const fs = require('fs');  // Importing fs module for file system operations

// Prompting the user for input using inquirer
inquirer.prompt([
  {
    type: 'input',
    name: 'color',
    message: 'Enter the color for the logo:',  // Asking the user for the logo color
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',  // Asking the user to choose a shape
    choices: ['circle', 'square', 'triangle'],  // Providing shape options
  },
  {
    type: 'input',
    name: 'text',
    message: 'Enter the text for the logo:',  // Asking the user for the logo text
  },
  {
    type: 'input',
    name: 'filename',
    message: 'Enter the filename to save the logo (without extension):',  // Asking for the filename
    default: 'logo'  // Providing a default filename
  }
]).then(answers => {
  // After collecting the answers, generate the SVG file
  generateSVG(answers.color, answers.shape, answers.text, answers.filename);
});

// Function to generate the SVG content and save it to a file
function generateSVG(color, shape, text, filename) {
  let shapeElement;  // Variable to hold the SVG shape element

  // Determine the shape based on user input
  switch (shape) {
    case 'circle':
      shapeElement = `<circle cx="150" cy="150" r="100" fill="${color}" />`;  // Circle SVG element
      break;
    case 'square':
      shapeElement = `<rect x="50" y="50" width="200" height="200" fill="${color}" />`;  // Square SVG element
      break;
    case 'triangle':
      shapeElement = `<polygon points="150,50 250,250 50,250" fill="${color}" />`;  // Triangle SVG element
      break;
    default:
      console.log('Invalid shape!');  // Handle invalid shape input
      return;  // Exit the function if shape is invalid
  }

  // Construct the full SVG content with the shape and text
  const svgContent = `
  <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    ${shapeElement}
    <text x="150" y="150" font-size="30" text-anchor="middle" fill="black" dy=".3em">${text}</text>
  </svg>`;

  // Write the SVG content to a file
  fs.writeFileSync(`${filename}.svg`, svgContent.trim());
  console.log(`Logo saved as ${filename}.svg`);  // Notify the user that the logo has been saved
}

module.exports = { generateSVG };  // Export the generateSVG function for testing or other uses
