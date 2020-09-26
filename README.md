# My SpaceX Console - Hacktoberfest 2020

![spacex wallpaper](https://raw.githubusercontent.com/AdityaPratap006/My-SpaceX-Console/master/readme-image.jpg)

Hi! Welcome to this beginner-friendly **Frontend Engineering** challenge for [Hactoberfest](https://hacktoberfest.digitalocean.com/). A project focused on people getting started with frontend development with [React](https://reactjs.org/) where one can build a very cool personal [SpaceX](https://www.spacex.com/) launch tracker.

Everyone is encouraged to participate, regardless of your skill level (If you don't have the required skills, use this project as a motivation to learn those!). This is a practice project and should be considered a playground.

# Project Summay

You have to build a **React** based web application which will act as your personal console for all things SpaceX!

Using the apis and tools given below, try to implement the following features:

- ### Minimum Required Features:

- [ ] A home screen, where the users can view the company info. :computer:

- [ ] A launches screen, where th user can view the list of all the launches. :rocket:

- Divide this into 3 sections.

- One section for upcoming launches, one for latest launches and one for past launches.

- [ ] A launch detail screen, where the user can view all the details of a particular launch. :chart:

- [ ] A launchpad map screen, where the user can view all the SpaceX launchpad locations on a map. :earth_americas:

- [ ] A navbar or menubar to navigate between different screens

- [ ] UI should be completely responsive! (i.e should be able to adapt accordingly for various device sizes)

- ### Nice-to-have Features

- [ ] Add a "mark for tracking" feature to mark a particular launch for tracking, save the launch details in the local storage only (no need to use a 3rd party service like firebase or mongoDB).

- [ ] When the launch date approaches, the app should show some kind of alert that this launch is scheduled today. (You can build another screen, for e.g: "Notifications Screen" where all the alerts will appear).

## APIs and Services to be used

- [ ] [**SpaceX api**](https://github.com/r-spacex/SpaceX-API/blob/master/docs/v4/README.md) : For fetching all the company info, launch details, launchpad data etc.

- [ ] [**React-Leaflet maps api**](https://react-leaflet.js.org/) : A free alternative for Google maps, use this to mark the launchpads on a map.

## Guidelines

System requirements:

- [ ] Make sure node version 12 or higher is installed on your system.

- [ ] Make sure yarn version 1.19.1 or higher is installed on your system.

Please try to follow these guidelines:

- [ ] Use only CSS/SCSS or Styled Components for styling the app, DON'T use bootstrap, material UI, semantic UI or any other styling library. (Haha! :wink: No shortcuts here :rofl:)

- [ ] Try to make the UI as elegant as possible, use Cards, box-shadows etc. Choose a subtle color-theme.

- [ ] Prefer functional components over class components, use react hooks and react context apis as far as possible.

- [ ] Unless absolutely necessary, don't use Redux for state management, try keeping things simple!

- [ ] Only use images/content that are available for free and don't need any special license.

- [ ] Last but not the least, use your imagination to build the coolest app you can think of ! :heart_eyes_cat: :fire: :fire: :fire:

## How to Contribute

> **Note 1:** If you've never made a pull request before, or participated in an open-source project, we recommend taking a look at this [wonderful video tutorial](https://youtu.be/ZI2D0CI4TXs). And if you want a more complete tutorial on using github, creating branches etc. , [here's a detailed video series](https://www.youtube.com/watch?v=3RjQznt-8kE&list=PL4cUxeGkcC9goXbgTDQ0n_4TBzOO0ocPR).Once you've got your feet wet, you're ready to come back and dive into Hacktoberfest fun!

> **Note 2:** **Super Important** Only the pull requests created between October 1st, 2020 and October 31st, 2020 will be counted!

1. Star this repository. :stuck_out_tongue:

2. And then you have to fork (make a copy) of this repo to your Github account.

3. Clone (download) your fork to your computer.

4. Set your streams so you can sync your clone with the original repo (get the latest updates)

- [ ] <code>git remote add upstream https://github.com/NITJSR-OSS/My-SpaceX-Console.git</code>

- [ ] <code>git pull upstream master</code>

- [ ] The above 2 commands will synchronize your forked version of the project with the actual repository.

5. Create a branch with your name (for e.g: if your name is John Wick, create a branch named `John_Wick`).

6. Make the changes in your branch.

7. Commit and push the code to YOUR fork.

8. Create a pull request to have the changes merged into the origin.

## Running the project locally

### After downloading this repo, run the command `yarn` (or if using npm - `npm install`) in the project directory to install the dependencies.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br  />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br  />

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br  />

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br  />

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br  />

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
