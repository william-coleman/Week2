$(document).ready(function () { 

//   ("#add").click(function(ev) {
//        ("ul").append('<li>Item 2<button class="remove">Remove</button></li>');
//    });

//    ("ul").click(".remove", function(ev) {
//        (ev.target).parent().fadeOut(); //.remove();
//    });

    var url = "https://api.darksky.net/forecast/4311ab1294f77e402cc0b478b55f4451/37.8267,-122.4233"

$.ajax(url, { method: "GET" }).done(function (data) {
        console.log(data);
        for (var name in data) {
            var text =
            $("#list").append("<li>" + text + "</li>");
        }

    });

