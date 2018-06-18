var tela;
$( document ).ready(function() {
  // Get current path and find target link
  tela = window.location.pathname.split("/").pop();
  
  switch(tela){
  	case 'index.html':
  		$("#navopts a:eq(0)").css('background-color','#f3a05a').css('color','#fff1de');
  	break;
  	case 'about.html':
  		$("#navopts a:eq(2)").css('background-color','#f3a05a').css('color','#fff1de');
  	break;
  	case 'allworks.html':
  		$("#navopts a:eq(1)").css('background-color','#f3a05a').css('color','#fff1de');
  	break;
 	case 'contact.html':
  		$("#navopts a:eq(3)").css('background-color','#f3a05a').css('color','#fff1de');
  	break;
  }
      
  $('body').hide(100).show(900);

  $("#bttcontato").click(function(){
    alert("Thank you!");
});
});