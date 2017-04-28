$(document).ready(function() {
  $(".formOne").submit (function(event) {
  event.preventDefault();
  var question1 = parseInt($("input:radio[name=answer1]:checked").val());
  var question2 = parseInt($("input:radio[name=answer2]:checked").val());
  var question3 = parseInt($("input:radio[name=answer3]:checked").val());
  var question4 = parseInt($("input:radio[name=answer4]:checked").val());
  var question5 = parseInt($("input:radio[name=answer5]:checked").val());
  var resultCSS = question1 + question2 === 2;
  var resultDesign = question1 + question2 === 3;
  var resultCsharp = question1 + question3 === 15;
  var resultJava = question1 + question3 === 20;
  var resultPhP = question1 + question3 === 25;
  var resultRuby = question1 + question3 === 30;

  if (resultCSS) {
    $(".option").hide();
    $("#CSS").fadeIn();
  }
  else if (resultDesign) {
    $(".option").hide();
    $("#webDesign").fadeIn();
  }
  else if (resultCsharp) {
    $(".option").hide();
    $("#cSharp").fadeIn();
  }
  else if (resultJava) {
    $(".option").hide();
    $("#Java").fadeIn();
  }
  else if (resultPhP) {
    $(".option").hide();
    $("#PHP").fadeIn();
  }
  else if (resultRuby) {
    $(".option").hide();
    $("#Ruby").fadeIn();
  }
  else {
    $(".option").hide();
    $("#pleasechoose").show();
  }
  });
});
