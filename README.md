# Portfolio Project
Welcome to my portfolio project! This is a showcase of my work as a developer, featuring a React frontend. Follow the instructions below to set up and run the project.

**Key Features**
- **React Frontend**: A responsive and user-friendly interface built using React.
- **Contact Form**: A functional contact form powered by EmailJS for seamless email communication.
- **reCAPTCHA v2 Integration**: Added to the contact form for enhanced security and spam protection.

___

## Running Locally

### Setup Instructions
1. **Clone the repository**  
   Run the following command to clone the repository to your local machine:
   ```
   git clone https://github.com/Matt-Hoang/Personal-Website.git
   ```
   
2. **Set up .env file**
  Option 1: Copy the .env file from an existing local development environment.
  Option 2: Create a new .env file in the root directory. Include all necessary variables and API keys below.
    - EmailJS: Service ID, Template ID, Account Public Key
    - reCAPTCHA: Site Key, Secret Key

3. **Install dependencies**
    ```
    Install dependencies
    ```
    
### Run for Local Development
1. **Start the frontend**
    Run the following command to start the React app in development mode:
    ```
    npm start
    ```

2. **Start the backend**
    In a new terminal, navigate to the backend folder:
    ```
    cd backend
    ```
    
    Start the backend server by running:
    ```
    node ./index.js
    ```

3. **Access the application**
    Open your browser and navigate to:
    http://localhost:3000

### Run for Local Build
1. **Build the application**
    Create an optimized production build by running:
    ```
    npm run build
    ```
    This will minify JavaScript and CSS files, optimize images, and output static files to the build directory.

2. **Serve the build locally**
    Use the following command to serve the static files locally:
    ```
    npx serve -s build
    ```
3. **Deploy to GitHub Pages**
    To deploy the build to the gh-pages branch, run:
    ```
    npx gh-pages -d build
    ```
    Access the live application at: 
    https://matt-hoang.github.io/Personal-Website/

___

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.