$(document).ready(function(){
				$('#in1').click(function(){
				
					
		<!-- Using CSS Properties -->
					$('#img2').animate({left:'690px'},500);
					$('#img1').animate({left:'430px'},500);
					$('#img2').animate({left:'720px'},500);
					$('#img1').animate({left:'410px'},500);
					
		<!-- Using Duration -->
					$('#rocket').animate({bottom:'480px'});
					$('#rocket').animate({left:'10px'});
					$('#rocket').animate({bottom:'485px'});
					$('#rocket').animate({left:'15px'});
					$('#rocket').animate({bottom:'490px'});
					$('#rocket').animate({left:'20px'});
					$('#rocket').animate({bottom:'495px'});
					$('#rocket').animate({left:'25px'});
					$('#rocket').animate({bottom:'500px'});
					$('#rocket').animate({left:'30px'});
					$('#rocket').animate({bottom:'505px'});
					$('#rocket').animate({left:'35px'});
					$('#rocket').animate({bottom:'510px'});
					$('#rocket').animate({left:'40px'});
					$('#rocket').animate({bottom:'515px'});
					$('#rocket').animate({left:'45px'});	

					$('#sun').animate({});	
					
				});
				$('#in2').click(function(){
					$('#rocket').stop(true);
					$('#img1').stop(true);
					$('#img2').stop(true);
				});
				
					
		
		<!-- Using Callback Function -->
				$('#in3').click(function(){
					$('#rocket').animate({},my2);
				});
});		
			
			function my2()
			{
				location.reload();
			}
			
			