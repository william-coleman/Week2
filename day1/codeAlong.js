$(document).ready(
$(function() {

    $("#para").click(function() {
        $("#para").fadeOut('slow','linear');
    });

    $("h3")
    .css("text-decoration","underline");   

    // $("ul li:first-child")    
    $("ul").find("li:first-child")
         .css("color","red");   
    
    // prepend for begenning, append for the end

    $(function() {

    

   $("#add").click(function(ev) {
       $("ul").append('<li>Item 2<button class="remove">Remove</button></li>');
   });

   $("ul").click(".remove", function(ev) {
       $(ev.target).parent().fadeOut(); //.remove();
   });
});