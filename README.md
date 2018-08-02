# Webpack Starter Kit

This is a front-end development starter kit that uses **npm**, **webpack** and **browsersync**.

The main content of this repository is package.json and webpack.config.js.
Also included is a test /src folder and a test index.html.

### How does it work

1. Install Node on your machine

    I recommend using [NVM](https://github.com/creationix/nvm) or [nodenv](https://github.com/nodenv/nodenv), but you can also use the binaries from the [Node](https://nodejs.org/en/) website.

2. Open your terminal and go to the folder containing this project, then run

    ```bash
    npm install
    ```

3. Now you have at your disposal two main npm commands:

    ```bash
    npm run dev
    ```

    which will start browsersync, compile your js and scss, create sourcemaps and watch for file changes.

    The command

    ```bash
    npm run dist
    ```

    will generate production files by additionally minifying css and packing media queries, plus less detailed source maps.
