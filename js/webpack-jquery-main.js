import {jQuery} from 'jquery';

$(document).ready(function() {
    console.log('ready');

    $('#button1').click(function(event) {
        alert('Hello!');
    });

    var handleTitleInput = function(event) {
        var length = event.target.value.length;
        console.log(length);
        $('#title-length').html(length);
    };

    $('#title').keyup(handleTitleInput);
    $('#title').keydown(handleTitleInput);
});
