$(document).ready(function() {
    console.log('Hello jQuery!');

    $('#button1').click(function(event) {
        console.log('click on ' + event.target.id);
        console.log(event);
    });

    $('#link1').click(function(event) {
        event.preventDefault();
        console.log('click on ' + event.target.id + ' intercepted');
    });

    var input1EventListener = function(event) {
        var value = $('#input1').val();
        $('#char-count').html(value.length);
    };

    $('#input1').keyup(input1EventListener);
    $('#input1').keypress(input1EventListener);

    $('#button2').click(function(event) {
        $('.box').toggleClass('box-big');
    });
});
