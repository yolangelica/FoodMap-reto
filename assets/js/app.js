
$(document).ready(function(){

		$(".generalCont").hide();
		$(function(){
	setTimeout(function() {
      	$('#splash').fadeOut(500);
    	$(".generalCont").show();  
   }, 2000);

		});


// filtra busqueda en INPUT
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });


//efecto zoom img

    $('.zoom').hover(function() {
        $(this).addClass('transition');
    }, function() {
        $(this).removeClass('transition');
    });



/*-------------Modal---------------------*/

    $('#open').click(function(){
        $('.modal').toggle('slow');
    });
    $('.modal').click(function(){
      $(this).css({display:"none"});
    });
  

});