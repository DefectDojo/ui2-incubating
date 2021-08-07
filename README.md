# Defect Dojo new UI v2 incubating
Work in Progress - GSoC 2021
## Setup for local development
Spinning up the local ReactJS environment on port 3000 and a local DefectDojo backend will create CORS conflict.
It is expected that you have a local DefectDojo instance running at localhost port 8080.

### Browser extension
For development purposes only, you can install a browser extension such as [this one](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc)

### Rebuild the DefectDojo docker images with some CORS packages and config
Append the following line to the bottom of your `requirements.txt` file:

```
django-cors-headers==3.7.0
```

Create (from the template) or modify your `dojo/settings/local_settings.py` file with:

```
INSTALLED_APPS += (
    'corsheaders'
)
```

and your middleware section, such as:

```
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
]
```

Add the following environment variable (change the origin per your url, such as local hostname for example)
```
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000"
]
```

Alternatively, you can consider using `CORS_ALLOW_ALL_ORIGINS = True`.

Then, rebuild your local images: `docker-compose build` and relaunch: `docker-compose stop` and `docker-compose up -d`.

## Available Scripts

In the project directory, you can run:

### `yarn install`

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
## Description

This repository host files for the new UI (v2)

## Context

This work is done during GSOC 2021

## Contributors 

* Aniket Bhat
* Udit Mishra
* Fred (mentor)
* Damien (mentor)
