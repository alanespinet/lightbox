//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

$("#img-gallery a").on("click", function(e){
  e.preventDefault();
  $("#overlay img").attr("src", $(this).attr("href"));
  var caption = $(this).find("img").attr("alt");
  $("#overlay").fadeIn();
  $("#overlay h3").html(caption);
});


$("#overlay").on("click", function(){
  $("#overlay").fadeOut();
});
