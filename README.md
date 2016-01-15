# Pokéname

A small showcase application, meant to focus on the programme structure and logic over being feature-rich. In addition to the actual application code, the build process is a relatively solid example of modular coding.

The application is designed to generate [Ubuntu-style](https://wiki.ubuntu.com/DevelopmentCodeNames) project names, but using [Pokemon](http://pokeapi.co/) instead of animals. The names can be "saved" to a list as you see ones you like. The original specification gave no indication on how the adjectives were to be generated, so a suitable API was found that could generate adjectives by first letter.

## Technology

* ES5
* jQuery (Promises)
* Backbone
* Underscore
* RequireJS
* Jade
* SASS
* NPM
* Bower
* Gulp
* Font Awesome

## Installation

NPM and Bower are required for usage. Note that some third-party libraries are included in the repository.

```
npm install
bower install
```

## Usage

To build the source and serve:

```
gulp
```

To simply serve already built code:

```
gulp serve
```

For development, linting and watchers (of source files) are included:

```
gulp develop
```

Note that, by default, the actual third-party APIs are used. This can be changed in `/src/scripts/config.js` but setting `mockData` to `true`, in which case the data in `src/scripts/mock/` will be used instead.

## Further Development

* Change how the environment is defined (e.g. development vs. production). Consider using [dotenv](https://www.npmjs.com/package/dotenv).
* Add automated testing.
* Rework the included third-party dependencies to work correctly from Bower (reduces repository size).
* Consider splitting the mock data into a distinct (separate) service; the mock data would not be needed in "production", but is currently part of the repository.
* Spend more time working on the rather simplistic styling: consider a responsive interface.
