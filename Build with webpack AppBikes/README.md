
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### `npm run build:dev`

Builds the app for development  to the `build` folder.<br>

### `npm run build:prod`

Builds the app for production  to the `bin` folder.<br>

### How see script in my package.json
#### package.json

```
"scripts": {
    "start": "node server.js",
    "build:dev": "node_modules/.bin/webpack",
    "build:prod": "NODE_ENV=production node_modules/.bin/webpack"
  }
```