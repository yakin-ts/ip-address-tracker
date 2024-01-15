
# Learning Guide for IP Address Tracker

  

This guide provides step-by-step instructions on how the IP Address Tracker project was built.

  

## Step 1: Project Setup

  

The project was initialized using Vite with the React and TypeScript template:

  

```sh

npx  create-vite  ip-address-tracker  --template  react-ts

```

This command sets up a new Vite project with React and TypeScript pre-configured.

  

## Step 2: Installing Dependencies

  

Next, we installed the necessary dependencies for the project:

```sh

npm  leaflet  react-leaflet

```

-  `leaflet` and `react-leaflet` for displaying interactive maps.

  

## Step 3: Setting Up the Project Structure

The project was structured into several directories:

-   `src/components`: This directory contains all the React components.
-   `src/services`: This directory contains the service for making API requests.
-   `src/types`: This directory contains the TypeScript types used throughout the project.

## Step 4: Building the Components

The main components of the application are:

-   `Header`: This component displays the header of the application.
-   `DetailsCard`: This component displays the details of the IP address.
-   `LocationMap`: This component displays the location of the IP address on a map.

Each of these components was built with React and TypeScript.

## Step 5: Fetching Data from the API

The  `getGeolocation`  function in  `src/services/api.ts`  is used to fetch data from the IP Geolocation API. This function is called in the  `App`  component and the returned data is stored in the state.
## Step 6: Displaying the Data

The data fetched from the API is passed as props to the  `DetailsCard`  and  `LocationMap`  components, which display the data.

## Step 7: Styling the Application

The application was styled using Tailwind CSS. The configuration for Tailwind CSS is in the  `tailwind.config.js`  file.

## Step 8: Linting and Formatting

ESLint was set up for linting, and Prettier was set up for code formatting. The configuration for ESLint is in the  `.eslintrc.cjs`  file, and the configuration for Prettier is in the  `prettier.config.js`  file.

## Step 9: Building and Running the Application

The application can be built and run using the scripts in the  `package.json`  file:
```sh
npm  run  dev  # to start the development server
npm  run  build  # to build the application for production
```
That's it! This is a high-level overview of how the IP Address Tracker project was built. For more detailed information, please refer to the code in the repository or feel free to reach me @ [Yakin T.](https://www.linkedin.com/in/yakin-teshome/)
 