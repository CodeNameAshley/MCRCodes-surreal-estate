# Getting Started with 🏠 Surreal Estate 🏠

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It is a property finder and selling application utilising backend created by Manchester codes


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `docker-compose up`

Launches the API deployed in Swagger - documentation for end points is avilable in localhost:3001/api-docs
GET, POST, DELETE, PATCH are all available end points

### `Pages`

Landing page will show all properties available in all locations. Filtering is available by location and price asc-desc. Add property, allows users to add properties via a form. Once the property is added a box will notify the users that their property have succesfully been placed in the API, an error message will also appear if not succesful. On clicking the submit button, the form refreshes ready for the next property to be added. 

### `Design`

The UI of this project is bold but not overpowering. The components are laid out for the users ease, the logo and navigation at the top, a banner image, a toggle filter button, then the list of properties. The list of filters have been placed in a toggle button to not take up space in the screen, this was achieved using useState. the colours compliment each other, and the images are from ACNH cottage core island creators to depict the theme of 'surreal'.


