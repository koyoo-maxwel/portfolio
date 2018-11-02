// Business Logic

window.addEventListener("load", function () {
    window.scrollTo(0, 0);
});

// User interface

$(".button-collapse").sideNav();

``
function textSplit(target) {
    target.children().andSelf().contents().each(function() {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\w)/g, "<span>$&</span>"));
        }
    });
  }
  
  $(function () {
   textSplit($('#js-text'));
  });
  

