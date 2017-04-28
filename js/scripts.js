$(document).ready(function() {
  $(".formOne").submit (function(event) {
  event.preventDefault();
  var question1 = parseInt($("input:radio[name=answer1]:checked").val());
  var question2 = parseInt($("input:radio[name=answer2]:checked").val());
  var question3 = parseInt($("input:radio[name=answer3]:checked").val());
  var question4 = parseInt($("input:radio[name=answer4]:checked").val());
  var question5 = parseInt($("input:radio[name=answer5]:checked").val());
  var resultQuestion1 = question1 === 1;


   if (resultQuestion1 + question2 === 2) {
     $(".option").hide();
     $("#CSS").show();
   }
  //  else if (resultQuestion1 + question2 === 3) {
  //     $(".option").hide();
  //     $("#webDesign").show();
  //   }
  });
});
