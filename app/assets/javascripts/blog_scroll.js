var originalPosition;

$(document).ready(function() {
  originalPosition = $(".stories_box").offset();
});


$(document).scroll(function() {
  var scroll = $(document).scrollTop();
  $(".stories_box").each(function() {
    var pos = $(this).offset();
    if( scroll > pos.top ) {
      $(this).offset({top:scroll, left:pos.left});
    }
    if( scroll < pos.top && pos.top > originalPosition.top ) {
      if( scroll < originalPosition.top ) {
        $(this).offset(originalPosition);
      } else {
        $(this).offset({top:scroll, left:pos.left});
      }
    }
   });

});