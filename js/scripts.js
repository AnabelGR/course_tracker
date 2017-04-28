$(document).ready(function() {
  $(".formOne").submit (function(event) {
  event.preventDefault();
  var question1 = parseInt($("input:radio[name=answer1]:checked").val());
  var question2 = parseInt($("input:radio[name=answer2]:checked").val());
  var question3 = parseInt($("input:radio[name=answer3]:checked").val());
  var question4 = parseInt($("input:radio[name=answer4]:checked").val());
  var question5 = parseInt($("input:radio[name=answer5]:checked").val());
  var resultQuestion1 = question1 === 1;
  var resultQuestion11 = question1 === 10;


  if (resultQuestion1 + question2 <=2) {
    $(".option").hide();
    $("#CSS").show();
  }
  else if (resultQuestion1 + question2 <=3) {
    $(".option").hide();
    $("#webDesign").show();
  }
  else if (resultQuestion11 + question3 <=15) {
    $(".option").hide();
    $("#cSharp").show();
  // }
  // else if (resultQuestion11 + question3 <=20) {
  //   $(".option").hide();
  //   $("#Java").show();
  // }
  // else if (resultQuestion11 + question3 <=25) {
  //   $(".option").hide();
  //   $("#PHP").show();
  // }
  // else if (resultQuestion11 + question3 <=30) {
  //   $(".option").hide();
  //   $("#Ruby").show();
  }
  else {
    $(".option").hide();
    $("#pleasechoose").show();
  }
  });
});
