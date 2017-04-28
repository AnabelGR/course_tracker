$(document).ready(function() {
  $("#form-group").submit (function(event) {
  var question1 = parseInt($("input:radio[name=answer1]:checked").val());
  var question2 = parseInt($("input:radio[name=answer2]:checked").val());
  var question3 = parseInt($("input:radio[name=answer3]:checked").val());
  var question4 = parseInt($("input:radio[name=answer4]:checked").val());
  var question5 = parseInt($("input:radio[name=answer5]:checked").val());
  var resultFrontEnd = question1 === 1;
  var resultBackEnd = question1 === 2;

   if (resultFrontEnd) {
   $(".option").hide();
   $("#CSS").show();
   }

});

event.preventDefault();
});
