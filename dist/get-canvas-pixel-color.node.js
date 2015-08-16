'use strict';
/**
 * getCanvasPixelColor
 * @param  {canvas element|context} ctx  The canvas from which to take the color
 * @param  {int} x                       The x coordinate of the pixel to read
 * @param  {int} y                       The y coordinate of the pixel to read
 * @return {array/object}                The rgb values of the read pixel
 */
Object.defineProperty(exports, '__esModule', {
	value: true
});

exports['default'] = function (ctx, x, y) {
	// if it's not a context, it's probably a canvas element
	if (!ctx.getImageData) {
		ctx = ctx.getContext('2d');
	}

	// extract the pixel data from the canvas
	var pixel = ctx.getImageData(x, y, 1, 1).data;

	// set each color property
	pixel.r = pixel[0];
	pixel.b = pixel[1];
	pixel.g = pixel[2];
	pixel.a = pixel[3];

	// convenience CSS strings
	pixel.rgb = 'rgb(' + pixel.r + ',' + pixel.g + ',' + pixel.b + ')';
	pixel.rgba = 'rgb(' + pixel.r + ',' + pixel.g + ',' + pixel.b + ',' + pixel.a + ')';

	return pixel;
};

module.exports = exports['default'];

