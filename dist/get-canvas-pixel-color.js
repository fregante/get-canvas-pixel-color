(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.getCanvasPixelColor = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])(1)
});