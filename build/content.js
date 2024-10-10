// src/content.js

// Function to simulate a click on an element
const clickElement = (element) => {
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  element.dispatchEvent(event);
};

// Function to connect with all visible Connect buttons
const connectWithAll = async () => {
  const connectButtons = document.querySelectorAll('button[data-control-name="connect"]');

  if (connectButtons.length === 0) {
    alert('No connectable profiles available.');
    return;
  }

  for (let i = 0; i < connectButtons.length; i++) {
    clickElement(connectButtons[i]);
    console.log(`Clicked connect button for profile ${i + 1}`);
    
    // Wait for a delay between clicks
    await new Promise(resolve => setTimeout(resolve, Math.random() * (3000 - 1000) + 1000)); // Random delay between 1-3 seconds
  }
};

// Create a floating button
const createConnectButton = () => {
  const button = document.createElement('button');
  button.innerText = 'Connect with All';
  button.style.position = 'fixed';
  button.style.bottom = '20px';
  button.style.right = '20px';
  button.style.zIndex = '9999';
  button.style.padding = '10px 20px';
  button.style.backgroundColor = '#0073b1';
  button.style.color = 'white';
  button.style.border = 'none';
  button.style.borderRadius = '5px';
  button.style.cursor = 'pointer';
  
  button.onclick = connectWithAll; // Assign the click event

  document.body.appendChild(button); // Add button to the body
};

// Initialize the button on page load
createConnectButton();
