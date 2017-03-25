> For Demo Purposes Only! Kthx

# Propelio Is Love!

Propelio© is a bright and shining new tool on the block for accessing *accurate* real estate MLS comps, exclusive lead lists, and high-equity deal alerts to increase your real estate investing profits. This demo AngularJS application creates an opportunity for users to find out what others are saying that makes Propelio so great.

## About this Project

This is a small but robust user interface for viewing testimonials about Propelio. It is built in Angular 2 and uses the [Webpack JS Module builder](https://webpack.js.org/) to organize build assets and prepare the finished application for production. Webpack also features a dev server for local development and asset watching. For more information about this setup see the [Angular 2 documentation](https://angular.io/docs/ts/latest/guide/webpack.html) on this combination of tools.

## Deployment

This repository is watched by the Docker-based Continuous Integration service [Wercker](http://www.wercker.com/) which tests, builds, and deploys the application. The configuration for this lives in `wercker.config.js` if you're interested. The intended production environment is Amazon's S3 Object Storage but will live happily on any web server.

## Collaborating

Collaberating on this project is silly since it's only for demo purposes. But I encourage checking out the repo and trying out the local dev environment. It's taken me a long time to find a workflow I felt was agile enough for production use.

### Setting Up

If you'd like to clone this project and work with it locally make sure to run `npm install` followed by `npm run fontello`. This task will download the custom icon font used by the application.

### Running the Dev Server

To start the local dev server run `npm start` and view the running application in your browser at http://localhost:8080. Changes made to your source files will be automatically rebuilt and injected.

### Building for Production

There is a separate build target for creating the production-ready application. This performs some additional optimizations such as cache busting assets and minifying scripts. To create this target execute `npm run build`. The full application will be build into the `dist/` directory.
