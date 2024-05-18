const fs = require('fs');  // Importing the fs module to mock file system operations
const { generateSVG } = require('OOP-SVG-logo/index');  // Importing the generateSVG function to be tested

jest.mock('fs');  // Mocking the fs module to avoid actual file system operations during tests

// Test suite for the generateSVG function
describe('generateSVG', () => {
  // Test case: Check if an SVG file with a circle is created correctly
  it('should create an SVG file with a circle', () => {
    generateSVG('red', 'circle', 'Test', 'test-logo-circle');  // Call the function with test data for a circle

    // Expected SVG content for a circle
    const expectedSVG = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="100" fill="red" />
      <text x="150" y="150" font-size="30" text-anchor="middle" fill="black" dy=".3em">Test</text>
    </svg>`.trim();

    // Verify that fs.writeFileSync was called with the correct arguments
    expect(fs.writeFileSync).toHaveBeenCalledWith('test-logo-circle.svg', expectedSVG);
  });

  // Test case: Check if an SVG file with a square is created correctly
  it('should create an SVG file with a square', () => {
    generateSVG('blue', 'square', 'Test', 'test-logo-square');  // Call the function with test data for a square

    // Expected SVG content for a square
    const expectedSVG = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="50" width="200" height="200" fill="blue" />
      <text x="150" y="150" font-size="30" text-anchor="middle" fill="black" dy=".3em">Test</text>
    </svg>`.trim();

    // Verify that fs.writeFileSync was called with the correct arguments
    expect(fs.writeFileSync).toHaveBeenCalledWith('test-logo-square.svg', expectedSVG);
  });

  // Test case: Check if an SVG file with a triangle is created correctly
  it('should create an SVG file with a triangle', () => {
    generateSVG('green', 'triangle', 'Test', 'test-logo-triangle');  // Call the function with test data for a triangle

    // Expected SVG content for a triangle
    const expectedSVG = `
    <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
      <polygon points="150,50 250,250 50,250" fill="green" />
      <text x="150" y="150" font-size="30" text-anchor="middle" fill="black" dy=".3em">Test</text>
    </svg>`.trim();

    // Verify that fs.writeFileSync was called with the correct arguments
    expect(fs.writeFileSync).toHaveBeenCalledWith('test-logo-triangle.svg', expectedSVG);
  });

  // Add more tests for other shapes and scenarios
});
