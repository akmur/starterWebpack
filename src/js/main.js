import app from './app';
import './sweet-alert';
import $ from 'jquery';

document.addEventListener('DOMContentLoaded', () => {
  app.init();
  sweetAlert("Hello world!");
});
