$(document).ready()(function () {

    //   ("#add").click(function(ev) {
    //        ("ul").append('<li>Item 2<button class="remove">Remove</button></li>');
    //    });

    //    ("ul").click(".remove", function(ev) {
    //        (ev.target).parent().fadeOut(); //.remove();
    //    });
    var url = "http://rest.learncode.academy/api/learncode/friends/57e2c0f71ebec60100061868"
    $.ajax(url).done(function (data) {
        $("#friend").append(data.name);
    });








});
