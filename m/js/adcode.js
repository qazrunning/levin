$(function(){
	$('.btn2-1,.btn4-1,.btn2-2,.btn5-1,.btn6-1,.btn7-1.btn8-1').on('click',function(){
			
		if("btn btn2-1"==$(this).attr("class")){
			 //chr
			_jcq.push(['_track', "wan_ljxqchr"]);
			_smq.push(['custom', 'm_minisite_2018_all-car_chr', 'm_minisite_2018_all-car_chr_details']);
		 }else if("btn btn2-2"==$(this).attr("class")){
				//凯美瑞
			_jcq.push(['_track', '12Camry_ljxq']);
			_smq.push(['custom', 'm_minisite_2019_all-car_camry', 'm_minisite_2019_all-car_camry_details']);
		 }else if("btn btn4-1"==$(this).attr("class")){
			 //凯美瑞双擎
			_smq.push(['custom', 'm_minisite_2018_all-car_camryhev', 'm_minisite_2018_all-car_camryhev_knowmore']);
		 }else if("btn btn5-1"==$(this).attr("class")){
			 //雷凌
			 _smq.push(['custom', 'm_minisite_2019_all-car_levin', 'm_minisite_2019_all-car_levin_details']);
			 _jcq.push(['_track', '12levin_ljxq']);
		 }else if("btn btn7-1"==$(this).attr("class")){
			 //致享
			 _smq.push(['custom', 'm_minisite_2019_all-car_yarislzhixiang', 'm_minisite_2019_all-car_yarislzhixiang_details']);
			_jcq.push(['_track', '12Yarisl_ljxq']);
		 }else if("btn btn8-1"==$(this).attr("class")){
			 //致炫
			 _smq.push(['custom', 'm_minisite_2019_all-car_yarisl', 'm_minisite_2019_all-car_yarisl_details']);
			 _jcq.push(['_track', '12yaris_ljxq']);
		 }
		$('.tan_lio').fadeIn(500);
    });
	
    $(".logo1,.logo2").on('click',function(){
	   var classname=$(this).attr("class");
	   if(classname=="logo1"){
		   _jcq.push(['_track', "wan_toyotalogo"]);
		   _smq.push(['custom', 'm_minisite_2018_all-car_top', 'm_minisite_2018_all-car_top_logoToyota']);
	   }else{
		   _jcq.push(['_track', "wan_gqftlogo"]);
		 _smq.push(['custom', 'm_minisite_2018_all-car_top', 'm_minisite_2018_all-car_top_logoGTMC']);
	   }
	})
})