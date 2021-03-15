var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + content.style.padding + "em";
    }
  });
}

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.padding){
      content.style.padding = null;
    } else {
      content.style.padding = "2em";
    }
  });
}

$('.text').on('click', function(){
  $('.js-scene').toggleClass('is-over');
  
  setTimeout(function () {
    window.location.href = "index.html";
  }, 1000);
});