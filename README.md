
# AVB Frontend Assesment

## Summary

Included is a working comment app that fetches from an external API and allows the user to add a comment. I have structured the app where app.js handles all data fetching and passing props to components. The initial comments are loaded from an external API, same mock comments. The API call is made with Axios and kept simple as possible. The data is stored in redux slice and then passed to components. I wasn't sure on what the requirements were for input fields and none were given so there is only a simple error check on string length. 



-Slices/comment.js contain the selectors for getting the Top 3 Commenters.
-There are 2 new components created CommentList and CommenterList.
-The Material UI theme is using orange as primary and purple as secondary



## User Story

As a user, I would like to be able to read a list of comments, add a comment, and see a list of the top 3 commenters.


### Tasks

> Please add comments to help explain decisions and add a summary to the README

1) Use Material-UI theme for custom color scheme(primary and secondary colors)
2) Display list of comments
   1) Comment UI should consist of avatar(first initial or first + last initial), name, and comment
   2) `store/api` has mock comments
   3) Extra: fetch from API to display initial comments instead of mock comments
3) Facilitate adding a comment via modal with input fields(name and comment), and submit button
4) Display a list of top 3 commenters
   1) Ui should consist of avatar(same as above) name, and comment count
   2) Should be listed in descending order of comment count


### Useful Links

* https://v4.mui.com/
* https://redux-toolkit.js.org/
* https://jsonplaceholder.typicode.com/comments


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
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

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
