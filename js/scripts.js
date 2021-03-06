// waits til the html document is loaded before javascript loads/runs
$(document).ready(function() {
// waits til the form is submitted before running the following javascript/jquery
  $("form#inputs").submit(function(event) {
// prevents the annoying default behavior (e.g. refreshing the page) from occurring with the submission of the form, the curly braces above enclose the rest of the logic to the bottom of the larger function.
  event.preventDefault();

// establishing variables assigned the score of 0 that will incrementally increase score with every selection that is assigned the value associated with the variable, which will ultimately store the final scores of the survey, as they're changed and updated below.
// Begin business logic
    var rubyRails = 0;
    var phpDrupal = 0;
    var javaAndroid = 0;
    var cssDesign = 0;
    var cNet = 0;

// writing variables that are assigned the value of the radio button that the user checked off
    var companyType = parseInt($("input:radio[name=orgType]:checked").val());
    var appType = parseInt($("input:radio[name=appType]:checked").val());
    var endType = parseInt($("input:radio[name=endType]:checked").val());
    var mobileType = parseInt($("input:radio[name=mobileType]:checked").val());
    var genericType = parseInt($("input:radio[name=genericType]:checked").val());

// Question 1
    if (companyType === 1) {
      rubyRails += 1;
    }
    if (companyType === 2) {
      phpDrupal += 1;
    }
    if (companyType === 3 ) {
      javaAndroid += 1;
    }
    if (companyType === 4) {
      cssDesign += 1;
    }
    if (companyType === 5) {
      cNet += 1;
    }
// Question 2
    if (appType === 1) {
      rubyRails += 1;
    }
    if (appType === 2) {
      phpDrupal += 1;
    }
    if (appType === 3 ) {
      javaAndroid += 1;
    }
    if (appType === 4) {
      cssDesign += 1;
    }
    if (appType === 5) {
      cNet += 1;
    }
// Question 3
    if (endType === 1) {
      rubyRails += 1;
      cssDesign += 1;
    }
    if (endType === 2) {
      phpDrupal += 1;
      cNet += 1;
      javaAndroid += 1;
    }
// Question 4
    if (mobileType === 1) {
      javaAndroid += 1;
      cssDesign += 1;
    }
    if (mobileType === 2) {
      phpDrupal += 1;
      rubyRails += 1;
    }
    if (mobileType === 3) {
      cNet += 1;
      cssDesign += 1;
}
// Question 5
    if (genericType === 1) {
      cNet += 1;
      phpDrupal += 1;
    }
    if (genericType === 2) {
      rubyRails += 1;
      cssDesign += 1;
    }
    if (genericType === 3) {
      javaAndroid += 1;
    }



// End Business Logic
// Begin User Interface logic


// figure out how get the submit to trigger a nice error message if they don't actually submit any answers!

    if (rubyRails + phpDrupal + cNet + cssDesign + javaAndroid === 0) {
      alert("Please fill out the survey to see your future!");
    } else if (rubyRails === phpDrupal) {
      alert("You're tied between Ruby and .php!")
      $(".preview").hide();
      $(".result").hide();
      $("#rubyRails").show();
      $("#phpDrupal").show();
      $('html, body').animate({
          scrollTop: $(".result").offset().top
      }, 2000);
// Is there a cool way to get all the ties, e.g. rubyRails === * or something?
    } else if (cNet >= rubyRails && cNet >= phpDrupal && cNet >= javaAndroid && cNet >= cssDesign) {
      $(".preview").hide();
      $(".result").hide();
      $("#cNet").show();
      $('html, body').animate({
          scrollTop: $("#cNet").offset().top
      }, 2000);
    } else if (rubyRails >= phpDrupal && rubyRails >= javaAndroid && rubyRails >= cssDesign && rubyRails >= cNet) {
      $(".preview").hide();
      $(".result").hide();
      $("#rubyRails").show();
      $('html, body').animate({
          scrollTop: $("#rubyRails").offset().top
      }, 2000);
    } else if (phpDrupal >= rubyRails && phpDrupal >= javaAndroid && phpDrupal >= cssDesign && phpDrupal >= cNet) {
      $(".preview").hide();
      $(".result").hide();
      $("#phpDrupal").show();
      $('html, body').animate({
          scrollTop: $("#phpDrupal").offset().top
      }, 2000);
    } else if (javaAndroid >= rubyRails && javaAndroid >= phpDrupal && javaAndroid >= cssDesign && javaAndroid >= cNet) {
      $(".preview").hide();
      $(".result").hide();
      $("#javaAndroid").show();
      $('html, body').animate({
          scrollTop: $("#javaAndroid").offset().top
      }, 2000);
    } else if (cssDesign >= rubyRails && cssDesign >= phpDrupal && cssDesign >= javaAndroid && cssDesign >= cNet) {
      $(".preview").hide();
      $(".result").hide();
      $("#cssDesign").show();
      $('html, body').animate({
          scrollTop: $("#cssDesign").offset().top
      }, 2000);
    }
  });
});
