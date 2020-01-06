$(document).ready(function(){
    var isHiden = true;
    $('#side_btn').click(function(){
        if(isHiden){
            $('#side_open').animate({right:'+=233px'});
        }else{
            $('#side_open').animate({right:'-=233px'});
        }
        isHiden = !isHiden;
        console.log("aa");
    });
  });

  $(document).ready(function(){
	$('#side_btn').click(function(){
		$(this).toggleClass('open');
	});
});