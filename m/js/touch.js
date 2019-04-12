$(document).ready(function(){
	var startx, starty;
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
    var angx = endx - startx;
    var angy = endy - starty;
    var result = 0;

    //如果滑动距离太短
    if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
        return result;
    }

    var angle = getAngle(angx, angy);
    if (angle >= -135 && angle <= -45) {
        result = 1;
    } else if (angle > 45 && angle < 135) {
        result = 2;
    } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    } else if (angle >= -45 && angle <= 45) {
        result = 4;
    }

    return result;
}

//对上滑动作进行封装
function touchs(dom,fn){
//手指接触屏幕
dom.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
dom.addEventListener("touchend", function(e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            break;
        case 1:
            fn();
            break;
        case 3:
        	leftfunc();
        	break;
        case 4:
        	rightfunc()
        	break;
        default:
    };
    
}, false);
}	

//封装一个左右滑动时的代码
function touchLR(dom,fn1,fn2){
//手指接触屏幕
dom.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
dom.addEventListener("touchend", function(e) {
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            break;
        case 3:
        	fn1();
        	break;
        case 4:
        	fn2()
        	break;
        default:
    };
    
}, false);
}






	//滑动的记录状态码;part2的状态码
	let part_state = 0;
	
	$(".ksts_btn").click(function(){
		part_state = part_state + 1;
	})
	var uuu1 = document.getElementById("loding3_main")
	function uuu(){
		var loding3_bg = $(".loding3_bg").css("display");
		console.log(loding3_bg);
		if(loding3_bg == "none"){
			$("#loding").hide();
    		$(".levin_part2").show();
    		$(".part2_1_top_p1").animate({left:"0%"},500)
    		$(".part2_1_top_p2").animate({right:"0%"},500)
    		$(".part2_1_b").fadeIn(500);
    		$(".part2_1_b").addClass("part2_1_b1");
    	}
  	};
  	//监听对应的位置进行滑动滚屏
  	touchs(uuu1,uuu);
  	//监听外观1的滑动
  	var waiguan1 = document.getElementsByClassName("levin_part2_1")[0];
  	touchs(waiguan1,uuu2);
	 function uuu2(){
	  		//外观1的消失动画
			$(".part2_1_top").fadeOut(500);
			$(".part2_1_b").fadeOut(500);
			$(".levin_part2_1").hide().delay(500);
			//外观2的显示动画
			$(".levin_part2_2").show();
			var big_light_num = 20;
			let set_big = setInterval(function(){
				big_light_num = big_light_num + 1;
				var big_light_src = "images/big_light/合成 1_002"+big_light_num+".jpg"
				$(".big_light").attr("src",big_light_src);
				if(big_light_num == 53){
					clearInterval(set_big);
				}
				if(big_light_num == 46){
					$(".part2_2_top_p1").animate({left:"0%"},500)
					$(".part2_2_top_p2").animate({right:"0%"},500)
					$(".part2_2_b").fadeIn(500);
					$(".part2_2_b").addClass("part2_2_b1");
				}
			},100);
	 }
	 //监听外观2的滑动
	 var waiguan2 = document.getElementsByClassName("levin_part2_2")[0];
	 touchs(waiguan2,uuu3)
	function uuu3(){
			var neishi_num = 85;
			$(".part2_2_top").fadeOut(500);
			$(".part2_2_b").fadeOut(500);
			$(".big_light").attr("src","images/neishi/合成 1_00285.jpg");
			var uuu3s = setInterval(function(){
				neishi_num = neishi_num + 1;
				var neishi_src = "images/neishi/合成 1_002"+neishi_num+".jpg"
				$(".big_light").attr("src",neishi_src);
				if(neishi_num == 93){
					clearInterval(uuu3s);
					$(".levin_part2_2").fadeOut(500);
					$(".levin_part2_3").fadeIn(500);
				}
			},100)
			setTimeout(function(){
				$(".levin_part2_3_p1").animate({left:"0%"},500);
				$(".levin_part2_3_p2").animate({right:"0%"},500);
				$(".levin_part2_3_b").fadeIn(500);
				$(".levin_part2_3_b").addClass("levin_part2_3_b1");
			},1000)
	}
	//监听内饰页面的左右触摸滑动
	var neishi_1 = document.getElementsByClassName("levin_part2_3")[0];
	touchLR(neishi_1,leftfunc,rightfunc)
	//内饰部分向左/右滑动的代码
	function leftfunc(){
		if($(".part3_11_img").css("display") == "none"){
			$(".part3_11_img").fadeIn(500);
			$(".yundong_beishi").show();
		}
	}
	function rightfunc(){
		var rr = $(".part3_11_img").css("display");
		if($(".part3_11_img").css("display") == "block"){
			$(".part3_11_img").fadeOut(500);
			$(".yundong_beishi").hide();
		}
	}
	//驾趣的显示动画。
	touchs(neishi_1,jiaqu)
	function jiaqu(){
		$(".levin_part2").fadeOut(500,function(){
			$(".levin_part3").fadeIn(500,function(){
				$(".jiaqu1_img").fadeIn(500);
				$(".jiaqu1_img").addClass("jiaqu1_img1");
				$(".qujia_title_p1").animate({left:"0%"},500);
				$(".qujia_title_p2").animate({right:"0%"},500);
				$(".jiaqu1_b").fadeIn(500);
				$(".jiaqu1_b").addClass("jiaqu1_b1");
			});
			
		});
	}
	//驾趣的左右滑动切换
	var levin_part3 = document.getElementsByClassName("levin_part3")[0];
	touchLR(levin_part3,jiaquL,jiaquR)
	function jiaquL(){
		var jiaqu_left = $(".levin_part3_jiaqu2").css("display")
		if(jiaqu_left =="none"){
			$(".levin_part3_jiaqu1").fadeOut(500);
			$(".levin_part3_jiaqu1").animate({left:"-100%"},500)
			$(".levin_part3_jiaqu2").show();
			$(".levin_part3_jiaqu2").animate({left:"0%"},500)
		}
	};
	function jiaquR(){
		var jiaqu_right = $(".levin_part3_jiaqu1").css("display");
		if(jiaqu_right == "none"){
			$(".levin_part3_jiaqu2").fadeOut(500)
			$(".levin_part3_jiaqu2").animate({left:"100%"},500)
			$(".levin_part3_jiaqu1").show()
			$(".levin_part3_jiaqu1").animate({left:"0%"},500)
		}
	};
	
	//当驾趣的上滑触发时的，安全模块的动画； 
	touchs(levin_part3,anquanfunc)
	function anquanfunc(){
		$(".levin_part3").fadeOut(500,function(){
			$(".levin_part4").fadeIn(500,function(){
				$(".anquan1_img").fadeIn(500);
				$(".anquan1_img").addClass("anquan1_img1");
				$(".anquan_title_p1").animate({left:"0%"},500);
				$(".anquan_title_p2").animate({right:"0%"},500);
				$(".anquan1_b").fadeIn(500);
				$(".anquan1_b").addClass("anquan1_b1");
				console.log()
			})
		})
	};
	//安全模块的左右滑动
	var levin_part4 = document.getElementsByClassName("levin_part4")[0];
	touchLR(levin_part4,anquanL,anquanR);
	function anquanL(){
		var anquan_left = $(".levin_part4_anquan2").css("display");
		if(anquan_left == "none"){
			$(".levin_part4_anquan1").fadeOut(500);
			$(".levin_part4_anquan1").animate({left:"-100%"},500);
			$(".levin_part4_anquan2").show()
			$(".levin_part4_anquan2").animate({left:"0%"},500)
		}
	};
	function anquanR(){
		var anquan_right = $(".levin_part4_anquan1").css("display");
		if(anquan_right == "none"){
			$(".levin_part4_anquan2").fadeOut(500);
			$(".levin_part4_anquan2").animate({left:"100%"},500);
			$(".levin_part4_anquan1").fadeIn(500);
			$(".levin_part4_anquan1").animate({left:"0%"},500);
		}
	}
	
	//安全模块上滑时触发的智能模块
	touchs(levin_part4,zhinengfunc);
	function zhinengfunc(){
		$(".levin_part4").fadeOut(500);
		$(".levin_part5").fadeIn(500,function(){
			$(".p5_1").animate({left:"0%"},500);
			$(".p5_2").animate({right:"0%"},500);
		});
		$(".tts_arrow").show();
		//tts_box的滑动
		var mySwiper = new Swiper ('.swiper-container', {
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  })     
	};
	
	//智能模块part1的上滑动作触发
	var levin_part5 = document.getElementsByClassName("levin_part5")[0];
	touchs(levin_part5,zhinengfunc2)
	function zhinengfunc2(){
		$(".levin_part5_title").fadeOut(500);
		$(".tts_box").fadeOut(400,function(){
			$(".levin_part5").hide();
			$(".levin_part6").show();
			var part6_img = 582;
			var part6_imgset =  setInterval(function(){
				part6_img = part6_img + 1;
				var part6_img_src = "images/zhineng/合成 1_00"+part6_img+".jpg";
				$(".levin_part6_bg").attr("src",part6_img_src);
				if(part6_img >= 604){
					clearInterval(part6_imgset);
					$(".levin_part6_top").fadeIn(500);
					$(".levin_part6_top").addClass("levin_part6_top1");
					$(".p6_1").animate({left:"0%"},500);
					$(".p6_2").animate({right:"0%"},500);
				}
			},88);
			
		})
	};
	
	
	
	
})
