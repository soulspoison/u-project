
 
$(document).ready(function() {
   $('.user').mouseenter(function() {
      $('.article').stop(false, true).slideDown(300);
   })
   $('.article').mouseleave(function() {
      $('.article').stop(false, true).delay(500).slideUp(300);
   })
   $('.message').click(function() {
      window.location.href = '../message.html';
   })            
})
