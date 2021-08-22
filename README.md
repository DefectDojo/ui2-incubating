# Defect Dojo UI V2 - GSOC 2021

This Repository contains all the work done by [Me(Aniket Bhat)](https://github.com/AniketBhat) during the GSOC 2021 period. 

[Defect Dojo](https://www.defectdojo.org/) is a open source vulnerability management and automation software. A [demo](https://demo.defectdojo.org/login?next=/) can be found here to tinker with the current implementation. 

## Abstract
Defect Dojo is a widely used software for management and analysis of workflows and automation. It was initially developed to be server side rendered with the Django stack. This approach although a more tranditional approach can cause a problem while dealing with lower bandwidth's and just the turn around time of a single request. Every click would ensure the whole page is rendered again. The main aim of this project was to deliver a modern UI with the architecture of the front

## Project Requirements

We used an agile methodology to keep track of requirements and development time using [JIRA](https://defectdojo.atlassian.net/jira/software/projects/UIV2/boards/9) software.

1. Build a packageable open source standard frontend application in React
2. Dockerise the React Application 
3. Implement Basic Authentication Flow using the Django API v2.
4. Code and Deliver Core Functionality Screens (Product, Engagement, Finding)    

## Work Done
1. This repository holds all the code that was done during GSOC 2021 and will be forked moving further.
2. 18 screens were broken down into 4 base reusable components. 

| Component Name          	| Screen Name                                                                                                                                                              	| Number of Screens 	|
|-------------------------	|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|-------------------	|
| BaseTableComponent      	| Product -> Product List Product -> Product Type Engagement -> Active Engagement Engagement -> All Engagements                                                            	| 4                 	|
| ModalComponent          	| Products -> Add/Edit Product Products -> Add/Edit Product Type Engagements -> Add/Edit Engagement Engagements -> Add/Edit Test Type Engagements -> Add/Edit environments 	| 5                 	|
| TabListComponent        	| Engagements -> Test Types Engagements -> Environments                                                                                                                    	| 2                 	|
| SelectionTableComponent 	| Findings -> Open Findings Findings -> All Findings Findings -> Closed Findings Findings -> Risk Accepted Findings Endpoints -> All EndPoints                             	| 5                 	|

   3. The components were coded and used across each of these screens
   4. Basic Authentication was used to navigate all the protected routes.

Below is the working demo of the completed work.

## Lessons/Learnings
It was a fun experience coding a summer project and there were many blockers and learnings along the way. Mainly:
1. CORS tokens and Man in the middle attack precaution.
1. React State Management
1. React Routing for Security
2. Building an Overlay React Modal which taught me about navigation state management.
3. REST principles.
4. Agile Methodologies
5. Frontend And Backend Architecture Practices.
6. Learning to set up Github Actions.
7. Learning about docker and deployment technologies.
# Setup for local development
Spinning up the local ReactJS environment on port 3000 and a local DefectDojo backend will create CORS conflicts and the react application will start on 3001.
k## Assumptions
- Your local react app runs on port 3001.
- You have a local DefectDojo instance running at localhost port 8080.

### Browser extension
For development purposes only, you can install a browser extension such as [this one](https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc).

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
## Contributors 

* Aniket Bhat
* Fred (mentor)
* Damien (mentor)
