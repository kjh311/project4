// twttr.widgets.load(
//   document.getElementById("container")
// );


$( document ).ready(function() {
    setInterval(function() {
      twttr.widgets.load();


}, 2000);
FB.XFBML.parse()


});
