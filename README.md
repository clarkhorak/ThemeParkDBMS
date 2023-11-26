# A Theme Park Web App

## Install following dependencies for this app to work on your local instance:
## npm install
## Microsoft SQL Server client, npm install mssql
## react-router-dom, npm i react-router-dom
## concurrently, npm install concurrently 
## datepicker, npm i react-datepicker

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Once you are done with a user role, you must sign out with the signout button to move on to the next user role`

### `In the package.json file`

When displaying the webpages through azure:
in package.json line 29 "start": "concurrently \"npm run start:react\" \"npm run start:server\""
becomes "start": "concurrently \"npm run build:react\" \"npm run start:server\""

On the local instance it stays as:
"start": "concurrently \"npm run start:react\" \"npm run start:server\""

## `View updates/changes`
In the Azure website in order to see changes in some of the tables that get information from the database you must sign out and sign back in. If you try to refresh the page, the connection will be lost. The only page you can refresh in the Azure app is the home page.

On the local instance, you can refresh the page and see the changes immediately.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
