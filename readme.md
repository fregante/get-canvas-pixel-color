# get-canvas-pixel-color [![module size](https://badge-size.herokuapp.com/bfred-it/get-canvas-pixel-color/master/dist/get-canvas-pixel-color.node.node.min.js) ![module gzipped size](https://badge-size.herokuapp.com/bfred-it/get-canvas-pixel-color/master/dist/get-canvas-pixel-color.node.node.min.js?compression=gzip)](https://github.com/bfred-it/get-canvas-pixel-color/blob/master/dist/get-canvas-pixel-color.min.js)

> Micro module to get the color of a single pixel on a HTML canvas

## Usage

```js
var canvas = document.querySelector('canvas');
var color = getCanvasPixelColor(canvas, 200, 10); // returns an array/object
//==> [255, 0, 100, 0.9]
//==> {r:255, g:0, b:100, a:0.9, rgb:'rgb(255,0,100)', rgba:'rgba(255,0,100,0.9)'}
var red = color.r; // 255
var red = color[0]; // 255
var alpha = color.a; // 0.9
var cssString = color.rgb; // 'rgb(255,0,100)'
```

## With browserify

```sh
npm install --save get-canvas-pixel-color
```

```js
var getCanvasPixelColor = require('get-canvas-pixel-color');
```

### Alternative usage in ES6

```js
import getCanvasPixelColor from 'get-canvas-pixel-color';

let canvas = document.querySelector('canvas');
let {r, g, b} = getCanvasPixelColor(canvas, 200, 10);
```

## API

### `getCanvasPixelColor(canvas, x, y)`

parameter | description
--- | ---
**`canvas`** | Type: `canvas element` or `canvas context`, *required* <br> The canvas from which to take the color
**`x`** | Type: `number`, *required* <br> The x coordinate of the pixel to read
**`y`** | Type: `number`, *required* <br> The y coordinate of the pixel to read
`@returns` | Type: `array/object` see usage example

## Files

Here's an explanation of the files included in this repo

* `index.js`: source file, in ES6
* `dist/get-canvas-pixel-color.js`: browser-ready file with AMD or a global variable called `getCanvasPixelColor`
* `dist/get-canvas-pixel-color.min.js`: same as above, minified
* `dist/get-canvas-pixel-color.node.js`: used by node/browserify with `require('get-canvas-pixel-color')`
* `dist/get-canvas-pixel-color.node.min.js`: same as above, but minified, for byte counting only

## Dependencies

No dependencies.

## License

MIT © [Federico Brigante](http://twitter.com/bfred_it)
