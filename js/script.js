//JQuery for navbar scrolling
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $(this).closest('.collapse').collapse('toggle');
});

// JQuery for scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
//TABS

$('#tabsaboutme a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
});


$('#tabsaboutme a[href="#resume"]').tab('show');
$('#tabsaboutme a[href="#aboutme"]').tab('show');
$('#tabsaboutme a[href="#skills"]').tab('show');

//Skills under cloud words

var word_list = [
   {text: "HTML", weight: 15},
   {text: "CSS", weight: 9},
   {text: "JavaScript", weight: 6},
   {text: "php", weight: 7},
   {text: "Bootstrap", weight: 5}
   // ...other words
];
$(document).ready(function() {
   $("#wordcloud").jQCloud(word_list);
});

$('#wordcloud').jQCloud(words, {
  autoResize: true
});

