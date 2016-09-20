$(document).ready()
$function{ 

  ("#add").click(function(ev) {
       ("ul").append('<li>Item 2<button class="remove">Remove</button></li>');
   });

   ("ul").click(".remove", function(ev) {
       (ev.target).parent().fadeOut(); //.remove();
   });
});
