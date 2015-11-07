$( document ).ready(function() {


  $('#beerspeakPageLink').click(function() {
    RW.render(null, true);
    RW_Async_Init();
    FB.XFBML.parse()
    $('body').scrollTop(0);
  });

  $('#searchPageLink').click(function() {
    $('body').scrollTop(0);
  });

  $('#breweryPageLink').click(function() {
    $('body').scrollTop(0);
  });

  $('#stylesPageLink').click(function() {
    $('body').scrollTop(0);
  });
});
