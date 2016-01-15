# Pokéname

A small showcase application, meant to focus on the programme structure and logic over being featurful.

The application is designed to generate [Ubuntu-style](https://wiki.ubuntu.com/DevelopmentCodeNames) project names, but using [Pokemon](http://pokeapi.co/) instead of animals.

## Technology

* ES5
* jQuery
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

For development, linting and watchers are included:

```
gulp develop
```

Note that, by default, the actual third-party APIs are used. This can be changed in `/src/scripts/config.js` but setting `mockData` to `true`, in which case the data in `src/scripts/mock/` will be used instead.

## Further Development

* Change how the environment is defined (e.g. development vs. production). Consider using [dotenv](https://www.npmjs.com/package/dotenv).
* Add automated testing.
* Rework the included third-party dependencies to work correctly from Bower (reduces repository size).
* Consider splitting the mock data into a distinct application which can be accessed as a service instead.
* Spend more time working on the rather simplistic styling: consider a responsive interface.
