# Set up

Clone this project to your local computer. Make sure you have proper ReactJS development environment set up.
If not, please follow the set up guideline [here](https://www.geeksforgeeks.org/reactjs-development-environment-setup/).

# Running the web-server `npm start` 

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Query the environment statistic data

You have to change this line of code to the correct `file_id`. This is the reference key to query the environment statistic data from mongodb server.

```javascript
const SHOP_KEY = "<correct_file_id" // example: "live-camera_20230505114704"
```