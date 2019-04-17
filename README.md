# konux-cs
At Konux , we are all about data and so are our front ends. We have to help our clients to easily get access to data and results and take decisions based on this. The following two tasks highlight these perspectives.

## Initial Desired setup

Even though the MVP is simple, The App could be set up as mono repo using Lerna/yarn workspace to enable modularity and easy maintanence

1. Design System repo to contain  Button/Input/Layout/Header/DateTimepicker
2. Visuals to contain React-D3 components LineChart/Bar etc
3. Common Repo to contain Formatting/String utils/ etc
4. App Repo to wire and build application

for this app, We will be using Yarn/Lerna , create-react-app
1. Styled components for styling
2. react-datetimepicker for date picker
3. Prettier for formatting
4. [Conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/) to write commit messages in specific way and release 
5. [Story book](https://storybook.js.org/) for testing components
6. Jest for testing

After initial troubles setting up the seperate repo for design systems with create react app to produce library bundle, I have decided to keep everything in one create-react-app for simplicity.I have tried using create-react-brary,unfortunately, it didnt work.

## How to get it Working?

1. Make sure Node is updated using nvm ( nvm is one of the way to manage node)
2. Clone the repo `git clone https://github.com/simpleMonk/konux-cs.git`
3. Install yarn or npm 
4. Install lerna globally `npm i lerna -g`
5. Change directory to konux-cs `cd konux-cs`
6. Bootstrap the project and install dependencies `lerna bootstrap`
7. In a seperate terminal , run `yarn run start` in konux-cs folder to start the application
8. In a seperate terminal, run `yarn run prettify` to format your TS/JS files on demand
9. In a seperate terminal, run `yarn run storybook` in konux-cs/packages/konux-app to run story to view components
10. App is available in localhost:3000
11. Storybook is available in localhost:9009

##List of Improvements

1. Add tests
2. Fix "any" type in Typescript with proper type
3. Extract design system in to seperate repo and roll own workflow step using webpack

