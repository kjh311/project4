$( document ).ready(function() {


  $('#beerspeakPageLink').click(function() {
    RW.render(null, true);
    RW_Async_Init();
    FB.XFBML.parse()
  });
});
