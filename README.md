# 🏠 Surreal Estate 🏠

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is a property finder and selling application utilising backend created by Manchester codes!
The theme of the app revolves around the word Surreal, the theme and design uses cottage core tones and images from ACNH.
The app allows the user to input their property, starting with a title, number of bedrooms, bathrooms, a dropdown box for type of property, and location. 
Once submitted the data is posted to an API endpoint, it is retrieved using react hook, in the landing page.
The landing page shows each property available, as well as different searching filters.

### Built With

- React.js
- CSS
- JavaScript
- Restful API

## Getting Started

### Prerequisites

You need to update this software in order to get the best result from this project.

### `npm install npm@latest -g`

Install the latest version of NPM

### Installation

1. Clone the repo
`git clone https://github.com/CodeNameAshley/surreal-estate`

2. Install NPM Packages
`npm install`

3. `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

4. `npm test`

Check if tests are still passing.

5. `docker-compose up`

Launches the API deployed in Swagger - documentation for end points is avilable in localhost:3001/api-docs
GET, POST, DELETE, PATCH are all available end points.
API needs to run in the background in order for the app to retrieve information.

## DevDependencies

- @testing-library/react": "^12.1.3",
- "eslint-config-airbnb": "^19.0.4",
- "eslint-config-prettier": "^8.3.0",
- "eslint-plugin-import": "^2.25.4",
- "eslint-plugin-jsx-a11y": "^6.5.1",
- "eslint-plugin-prettier": "^4.0.0",
- "eslint-plugin-react": "^7.28.0",
- "eslint-plugin-react-hooks": "^4.3.0",
- "prettier": "^2.5.1"

## Pages 📄

Landing page will show all properties available in all locations. 
Filtering is available by location and price asc-desc. Add property, allows users to add properties via a form. 
Once the property is added a box will notify the users that their property have succesfully been placed in the API, an error message will also appear if not succesful. 
On clicking the submit button, the form refreshes ready for the next property to be added. 

## Design 🖼️

The UI of this project is bold but not overpowering. 
The components are laid out for the users ease, the logo and navigation at the top, a banner image, a toggle filter button, then the list of properties. 
The list of filters have been placed in a toggle button to not take up space in the screen, this was achieved using useState. 
The colours compliment each other, and the images are from ACNH cottage core island creators to depict the theme of 'surreal'.

## Contributors

- Manchester Codes for API
- CodeNameAshley

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Lastly I hope you enjoy this project and its quirkiness! 
Stay coding coders!
