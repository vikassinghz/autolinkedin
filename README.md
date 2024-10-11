# LinkedIn Connection Automator Chrome Extension

This project is a Chrome extension built with the [wxt.dev](https://wxt.dev) framework and React.js, designed to automate connection requests on LinkedIn. The extension is specifically tailored to work on the LinkedIn "My Network" page.

## Demo

[![Watch the demo](https://github.com/vikassinghz/autolinkedin/blob/main/linkedIn%20connector.png)](https://drive.google.com/file/d/1aRflfe9VzaR9bZo2A6ORJTdppBkYJ_H1/view?usp=drive_link)

Click the thumbnail above to watch the demo video.



## Objective

To automate the process of sending connection requests to all visible profiles on the [LinkedIn Grow Network page](https://www.linkedin.com/mynetwork/grow/).

## Features

- Adds a floating button with the text **"Connect with All"** to the LinkedIn "My Network" page.
- Automatically triggers the "Connect" button for all visible profiles when clicked.
- Adds a customizable delay between each connection request to prevent account blocking.

## Assignment Requirements

1. **Target URL**: The extension operates on the following URL:  
   `https://www.linkedin.com/mynetwork/grow/`
   
2. **UI**: 
   - A floating button labeled **"Connect with All"** is added to the page.
   
3. **Functionality**: 
   - Clicking the button sends connection requests to all profiles visible on the page.
   - Handles up to 50 connection requests by simulating clicks on the "Connect" buttons.

4. **Additional Requirements**:
   - Includes a delay of 1-3 seconds between each connection request to avoid triggering LinkedIn's rate-limiting measures.
   - Clean and well-commented code.
   - Handles edge cases, such as when no profiles are available for connection.


## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/linkedin-connection-automator.git
2. Install:
   ```bash
     npm install
3. Build the project:
   ```bash
     npm run build
4. Load extension in crome :
   1.Open Chrome and navigate to:
    `chrome://extensions/`.
   2.Enable Developer mode.
   Click Load unpacked and select the `build` directory.

## Usage

1. Navigate to the LinkedIn "My Network" page:  
   `https://www.linkedin.com/mynetwork/grow/`
2. Click the **"Connect with All"** button added by the extension.
3. Watch as the extension automatically sends connection requests to all visible profiles with a delay between each request.

## Edge Cases Handled

- **No Connectable Profiles**: If no profiles are available for connection, the extension gracefully handles this scenario without errors.

## Tools & Frameworks

- [wxt.dev](https://wxt.dev) - Framework for building Chrome Extensions.
- React.js - JavaScript library for building the user interface.

## Deliverables

1. A demo video of the extension in action.
2. Link to this GitHub repository.
3. A packaged `.zip` file of the extension for easy installation.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

