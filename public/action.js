$(function () {
    $('#KonRoBotAvatar').on( "load", function(){
        magnify("KonRoBotAvatar", 3);
    });

    $('#makeSignal').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "makeSignal"},
        });
    });

    $('#drawRectangle').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "drawRectangle"},
        });
    });
    $('#driveIndependentlyWithManualSensor').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "driveIndependentlyWithManualSensor"},
        });
    });
    $('#driveManually').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "driveManually"},
        });
    });
    $('#driveIndependentlyWithSensor').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "driveIndependentlyWithSensor"},
        });
    });
    $('#stop').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "stop"},
        });
    });
    $('#goStraight').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "goStraight"},
        });
    });
    $('#turnLeft').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "turnLeft"},
        });
    });
    $('#stopDM').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "stopDM"},
        });
    });
    $('#turnRight').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "turnRight"},
        });
    });
    $('#goBack').click(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "goBack"},
        });
    });

    $('#myRange').change(() => {
        $.ajax({
            type: "POST",
            url: '/action',
            dataType: 'json',
            data: {cmd: "speed", speed: slider.value},
        });
    });

    var slider = document.getElementById("myRange");
    var output = document.getElementById("speed");
    output.innerHTML = slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
    }
});
