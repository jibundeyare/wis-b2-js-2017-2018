// js/webpack-jquery-main.js

// @todo activate import

import {jQuery} from 'jquery';
// var $ = require('jquery');

$(document).ready(function() {
    console.log('ready');

    $('#button1').click(function(event) {
        alert('Hello!');
    });

    $('#title').keyup(function(event) {
        var length = event.target.value.length;
        console.log(length);
        $('#title-length').html(length);
    });
});
