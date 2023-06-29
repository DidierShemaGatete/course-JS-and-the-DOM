/* Using third parameter to listen to EVENT ONCE */

// Create a reference to the target node
var node = document.getElementById('myNode');

// Define the event listener function
function handleClick(event) {
  console.log('Node clicked!');
  console.log('Event:', event);
}

// Define the configuration object
var config = {
  once: true // Listen for only a single event
};

// Add the event listener with the configuration object
node.addEventListener('click', handleClick, config);


// Create a new element
var newElement = document.createElement('div');

// Set properties or attributes for the new element (optional)
newElement.className = 'box';
newElement.textContent = 'New Element';

// Insert the new element into the DOM
var parentElement = document.getElementById('parent');
parentElement.appendChild(newElement);
