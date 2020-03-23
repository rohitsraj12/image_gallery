$(document).ready(function() {
  $("#tab-btn ul li a").click(function(event) {
    event.preventDefault();
    var selectAtt = $(this).attr("data-category");

    $("#tab-btn ul li a").removeClass("active__tab");
    $(this).addClass("active__tab");

    $(".all").hide();
    $("." + selectAtt).fadeIn();
  });
});
