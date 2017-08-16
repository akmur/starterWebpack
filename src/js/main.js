/* global document sweetAlert */

import $ from 'jquery';
import app from './app';
import './sweet-alert';

document.addEventListener('DOMContentLoaded', () => {
  const myConst = 'test ES6 transpiling';
  app.init(); // testing my custom module
  console.log($, myConst); // testing jQuery
  sweetAlert('Hello world!'); // testing old skool external plugin import
});
