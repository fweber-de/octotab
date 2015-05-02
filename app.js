var getHexFromTime = function(time) {
    var h = time.format('HH');
    var m = time.format('mm');
    var s = time.format('ss');

    return '#' + h + m + s;
};

var setValues = function() {
    var format = 'HH:mm:ss';
    var time = moment();
    var hex = getHexFromTime(time);

    $('.time').html(time.format(format));
    $('.hex-code').html(hex);
    $('body').css('background-color', hex);
};

$(document).ready(function() {

    setValues();
    
    setInterval(function() {
        setValues();
    }, 1000);

});
