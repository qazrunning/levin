$(document).ready(function(){
	loding();
	function loding(){
		var loding_num = 0;
		var loding_time = setInterval(function(){
			loding_num = loding_num +1;
			$(".loding_number span").text(loding_num)
			if(loding_num == 100){
				clearInterval(loding_time)
			};
		},15);
		$(".loding_number span").text();
		$(".zhezhao").animate({height:"0rem"},1500,function(){
			$(".loding_mid").hide();
			$(".loding2_2").show();
			var loding_2 = 0;
			var _loding_2_2 = 31;
			var loding_2_1 = setInterval(function(){
				loding_2 = loding_2 +0.1;
				$(".loding2").css("opacity",loding_2)
			},100);
			//
			var loding_2_2 = setInterval(function(){
				_loding_2_2 = _loding_2_2 +1;
				var af_src = "images/loading_af/合成 1_000"+_loding_2_2+".jpg"
				$(".loding_af").attr("src",af_src)
				if(_loding_2_2 == 55){
					clearInterval(loding_2_2);
				}
			},150)
			setTimeout(function(){
				clearInterval(loding_2_1);
					$(".loding2").hide();
					$(".loding2_2").hide();
					$(".loding1").hide();
					$(".loding3").show();
			},3000)
			
		})
	}
	//这里为2.5s后的车辆显示动画
	
	setTimeout(function(){
		loding_che()
	},5000)
	function loding_che(){
		$(".loding3_1").fadeIn(500,function(){
			$(".loding3_1").addClass("loding3_1_1");
		});
		setTimeout(function(){
			$(".loding3_main_b").animate({bottom:"0rem"},500);
			$(".loding3_main_top").addClass("loding3_main_top_ani");
			$(".ksts_btn").addClass("ksts_btn_cha");
			$(".loding3_5").fadeIn(1000)
		},400)
	}
	//这里我也不记得执行了多久 了 5000 + 2000
	$(".ksts_btn").click(function(){
		$(".loding3_main_b").animate({bottom:"-6rem"},500);
		$(".loding3_main_top").fadeOut(500)
		var sca = 1;
		var click_btn =  setInterval(function(){1;
			sca = sca + 0.1;
			$(".loding3_main_top").css("transform","scale("+sca+")");
		},40);
		setTimeout(function(){
			clearInterval(click_btn);
			$(".ksts_btn").fadeOut(100);
			$(".car_go_title1").fadeIn(1000);
			$(".car_go_title2").fadeIn(1000);
		},500);
		
		$(".loding3_bg").hide();
		$(".loding_car_go").show();
		var go_num = 20;
		var car_go = setInterval(function(){
			go_num = go_num + 1;
			var csr_go_src = "images/car_go/01过渡-3_001"+go_num+".jpg"
			$(".car_go_1").attr("src",csr_go_src);
			if(go_num == 34){
				clearInterval(car_go);
				$(".car_go_arrow").show();
				
			}
		},100);
	});
		
})
