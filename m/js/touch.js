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


	//车冲出
	var car_gos = document.getElementsByClassName("levin_part1")[0];
	touchs(car_gos,cargofun);
	function cargofun(){
		$("#levin_mune").fadeIn(1000)
		$(".levin_part1_title").fadeOut(500);
		$(".levin_part1_b").fadeOut(500,function(){
			$(".levin_part1").hide();
			$(".levin_car_go").show();
			$(".car_img_t").fadeIn(1000)
			$(".car_img_b").fadeIn(1000)
			var car_num = 20;
			var car_go_set = setInterval(function(){
				car_num = car_num + 1;
				$(".car_go_img1").attr("src","images/car_go/01过渡-3_001"+car_num+".jpg");
				if(car_num >= 34){
					clearInterval(car_go_set);	
				}
			},88)
		})
	}



	
	var uuu1 = document.getElementsByClassName("levin_car_go")[0]
	function uuu(){
		
		//菜单的联动
		$(".levin_mune_ul li").removeClass("active_li");
		$(".xuanku_li").addClass("active_li");
		
		$(".levin_part2_1").show();
		$(".part2_1_top").show();
		$(".levin_car_go").fadeOut(100)
		$(".levin_part2").fadeIn(200);
		$(".part2_1_top_p1").animate({left:"0%"},500)
		$(".part2_1_top_p2").animate({right:"0%"},500)
		$(".part2_1_b").fadeIn(500);
		$(".part2_1_b").addClass("part2_1_b1");
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
					$(".part2_2_top").show();
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
		//还原上一版的动画
		$(".part2_2_top_p1").animate({left:"-120%"},500)
		$(".part2_2_top_p2").animate({right:"-120%"},500)
		
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
				//还原
				$(".levin_part2_2").show(500);
				$(".levin_part2_3").show(500);
				
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
		//还原
		$(".levin_part2_3_p1").animate({left:"-120%"},500);
		$(".levin_part2_3_p2").animate({right:"-120%"},500);
		
		
		$(".levin_mune_ul li").removeClass("active_li");
		$(".jiaqu_li").addClass("active_li");
		
		$(".levin_part2").fadeOut(500,function(){
			$(".levin_part3").fadeIn(500,function(){
				$(".jiaqu1_img").fadeIn(500);
				$(".jiaqu1_img").addClass("jiaqu1_img1");
				$(".qujia_title_p1").animate({left:"0%"},500);
				$(".qujia_title_p2").animate({right:"0%"},500);
				$(".jiaqu1_b").fadeIn(500);
				$(".jiaqu1_b").addClass("jiaqu1_b1");
				$(".levin_part2_3").hide();
			});
			
		});
	}
	//驾趣的左右滑动切换
	var levin_part3 = document.getElementsByClassName("levin_part3")[0];
	touchLR(levin_part3,jiaquL,jiaquR)
	function jiaquL(){
		var jiaqu_left1 = $(".levin_part3_jiaqu2").css("display");
		var jiaqu_left2 = $(".levin_part3_jiaqu3").css("display");
		if(jiaqu_left1 =="none" && jiaqu_left2 == "none"){
			$(".levin_part3_jiaqu1").fadeOut(500);
			$(".levin_part3_jiaqu1").animate({left:"-100%"},500)
			$(".levin_part3_jiaqu2").fadeIn();
			$(".levin_part3_jiaqu2").animate({left:"0%"},500)
		}else if(jiaqu_left1 == "block" && jiaqu_left2 == "none"){
			$(".levin_part3_jiaqu2").fadeOut(500);
			$(".levin_part3_jiaqu2").animate({left:"-100%"},500);
			$(".levin_part3_jiaqu3").fadeIn(500);
			$(".levin_part3_jiaqu3").animate({left:"0%"},500)
		}
	};
	function jiaquR(){
		var jiaqu_right1 = $(".levin_part3_jiaqu1").css("display");
		var jiaqu_right2 = $(".levin_part3_jiaqu2").css("display");
		if(jiaqu_right1 == "none" && jiaqu_right2 == "block"){
			$(".levin_part3_jiaqu2").fadeOut(500)
			$(".levin_part3_jiaqu2").animate({left:"100%"},500)
			$(".levin_part3_jiaqu1").fadeIn()
			$(".levin_part3_jiaqu1").animate({left:"0%"},500)
		}else if(jiaqu_right1 == "none" && jiaqu_right2 == "none"){
			$(".levin_part3_jiaqu3").fadeOut(500)
			$(".levin_part3_jiaqu3").animate({left:"100%"},500)
			$(".levin_part3_jiaqu2").fadeIn()
			$(".levin_part3_jiaqu2").animate({left:"0%"},500)
		}
	};
	
	//当驾趣的上滑触发时的，安全模块的动画； 
	touchs(levin_part3,anquanfunc)
	function anquanfunc(){
		//还原
		$(".qujia_title_p1").animate({left:"-120%"},500);
		$(".qujia_title_p2").animate({right:"-120%"},500);
		
		$(".levin_mune_ul li").removeClass("active_li");
		$(".anquan_li").addClass("active_li");
		
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
			$(".levin_part4_anquan2").fadeIn()
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
		//还原
		$(".anquan_title_p1").animate({left:"-120%"},500);
		$(".anquan_title_p2").animate({right:"-120%"},500);
		
		$(".levin_mune_ul li").removeClass("active_li");
		$(".zhineng_li").addClass("active_li");
		
		$(".levin_part4").fadeOut(500);
		$(".levin_part5").fadeIn(500,function(){
			$(".p5_1").animate({left:"0%"},500);
			$(".p5_2").animate({right:"0%"},500);
		});
		$(".tts_arrow").show();
		//tts_box的滑动
		var mySwiper = new Swiper ('.swiper-containers', {
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
		//还原
		$(".p5_1").animate({left:"-120%"},500);
		$(".p5_2").animate({right:"-120%"},500);
		
		
		$(".levin_part5_title").fadeOut(500);
		$(".tts_box").fadeOut(400,function(){
			$(".levin_part5").hide();
			$(".levin_part6").show();
			var part6_img = 583;
			var part6_imgset =  setInterval(function(){
				part6_img = part6_img + 1;
				var part6_img_src = "images/zhineng/合成 1_00"+part6_img+".jpg";
				$(".levin_part6_bg").attr("src",part6_img_src);
				if(part6_img >= 605){
					clearInterval(part6_imgset);
					$(".levin_part6_top").fadeIn(500);
					$(".levin_part6_top").addClass("levin_part6_top1");
					$(".p6_1").animate({left:"0%"},500);
					$(".p6_2").animate({right:"0%"},500);
				}
			},88);
			
		})
	};
	
	var levin_part6 = document.getElementsByClassName("levin_part6")[0];
	touchs(levin_part6,zhongkong);
	function zhongkong(){
		//还原
		$(".levin_part5_title").show();
		$(".tts_box").show()
		$(".p6_1").animate({left:"-120%"},500);
		$(".p6_2").animate({right:"-120%"},500);
		
		$(".levin_part6_top").fadeOut(200);
		$(".levin_part6_title").fadeOut(200,function(){
			$(".levin_part6").hide();
			$(".levin_part7").show();
			var zhongkong_num = 45;
			var zhongkong_set = setInterval(function(){
				zhongkong_num = zhongkong_num +1;
				var zhongkong_src = "images/zhongkong/合成 1_006"+zhongkong_num+".jpg";
				$(".zhongkong_img").attr("src",zhongkong_src);
				if(zhongkong_num >= 54){
					clearInterval(zhongkong_set);
					$(".zhongkong_three").fadeIn(500,function(){
						$(".p7_1").animate({left:"0%"},300);
						$(".p7_2").animate({right:"0%"},300);
						$(".levin_part7_b").fadeIn(1000);
						$(".levin_part7_b").addClass("levin_part7_b1");
						
					})
				}
			},88)
		})
	};
	
	var levin_part7 = document.getElementsByClassName("levin_part7")[0];
	touchs(levin_part7,shengji);
	function shengji(){
		//还原
		$(".levin_part7").animate({top:"0%"})
		$(".zhongkong_three").hide()
		$(".levin_part6_title").show()
		$(".p7_1").animate({left:"-120%"},300);
		$(".p7_2").animate({right:"-120%"},300);
		
		$(".levin_mune_ul li").removeClass("active_li");
		$(".shengji_li").addClass("active_li");
		
		$(".levin_part7").animate({top:"-50%"},350);
		$(".levin_part7").fadeOut(500);
		$(".levin_part8").fadeIn(function(){
			$(".shengji_move").addClass("shengji_move1");
			$(".levin_part8_title").animate({bottom:"12%"},500).delay(300)
			
			//第一次文字显示的动画
			$(".p8_title_img1").fadeIn(500);
			$(".p8_title_img1").animate({left:"12%"},300);
			
			$(".p8_title_img2").fadeIn(500);
			$(".p8_title_img2").animate({right:"12%"},300);
			
			$(".p8_title_img3").fadeIn(500);
			$(".p8_title_img3").animate({left:"12%"},400);
			
			
			
			//切换的联动
			var carThumbs = new Swiper('.swiper_title_box', {
		      slidesPerView: 3,
		      freeMode: true,
		      watchSlidesVisibility: true,
		      watchSlidesProgress: true,
		    });
			var shengjicar = new Swiper('.swiper_car', {
		      navigation: {
		        nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		      },
		      thumbs: {
		        swiper: carThumbs
		      },
		      on: {
		      	slideChangeTransitionStart: function(){
			       $(".p8_title_img1").fadeOut(100);
			       $(".p8_title_img1").css("left","-50%");
			      $(".p8_title_img2").fadeOut(100);
			      $(".p8_title_img2").css("right","-50%");
			      $(".p8_title_img3").fadeOut(100)
			      $(".p8_title_img3").css("left","-50%");
			    },
			    
			     slideChangeTransitionEnd: function(){
			      	$(".p8_title_img1").fadeIn(300);
					$(".p8_title_img1").animate({left:"12%"},100);
					
					$(".p8_title_img2").fadeIn(300);
					$(".p8_title_img2").animate({right:"12%"},100);
					
					$(".p8_title_img3").fadeIn(300);
					$(".p8_title_img3").animate({left:"12%"},100);
			    },
			  },
		    });
		    
		    
		});
		
	}
	
	
	var levin_part8 = document.getElementsByClassName("levin_part8")[0];
	touchs(levin_part8,jinrongfun);
	function jinrongfun(){
		//还原
		$(".levin_part7").animate({top:"0%"})
		
		$(".levin_mune_ul li").removeClass("active_li");
		$(".jinrong_li").addClass("active_li");
		
		$(".levin_part8").animate({top:"-50%"},350);
		$(".levin_part8").fadeOut(500);
		$(".levin_part9").fadeIn(function(){
			$(".p9_title_img").animate({left:"7%"},500);
			$(".shoufu_box").fadeIn(2000);
			$(".shoufu_box").addClass("shoufu_box1")
			$(".youxian_box").fadeIn(2000);
			$(".youxian_box").addClass("youxian_box1")
		})
	}
	
	var levin_part9 = document.getElementsByClassName("levin_part9")[0];
	touchs(levin_part9,liuzifun);
	function liuzifun(){
		$(".levin_part8").animate({top:"0%"});
		$(".levin_mune_ul li").removeClass("active_li");
		$(".yuyue_li").addClass("active_li");
		
		$(".levin_part9").animate({top:"-50%"},350);
		$(".levin_part9").fadeOut(500);
		$(".tan_lio").show(function(){
			$(".levin_part9").animate({top:"0%"});
		})
	}
	
	
	//菜单的联动
	munefun()
	function munefun(){
		$(".mune_arrow1").click(function(){			
			if($(".levin_mune_ul").css("display") == "none"){
				$(".mune_arrow1").removeClass("mune_arrow");
				$(".levin_mune_ul").slideToggle();
			}else if($(".levin_mune_ul").css("display") == "block"){
				$(".mune_arrow1").addClass("mune_arrow");
				$(".levin_mune_ul").slideToggle();
			}
		});
		
		$(".levin_mune_ul li").click(function(){
			$(".levin_mune_ul").slideToggle();
			$(".mune_arrow1").addClass("mune_arrow")
			var that = $(this).attr("class");
			if(that == "xuanku_li"){
				hidePart();
				uuu();
			}
			if(that == "jiaqu_li"){
				hidePart();
				jiaqu();
			}
			if(that == "anquan_li"){
				hidePart();
				$(".levin_part6").animate({top:"0%"},100)
				anquanfunc();
			}
			if(that == "zhineng_li"){
				hidePart();
				$(".levin_part7").animate({top:"0%"},100)
				zhinengfunc();
			}
			if(that == "shengji_li"){
				hidePart();
				$(".levin_part8").animate({top:"0%"},100)
				shengji();
			}
			if(that == "jinrong_li"){
				hidePart();
				$(".levin_part9").animate({top:"0%"},350);
				jinrongfun();
			}
			if(that == "yuyue_li"){
				hidePart();				
				liuzifun()
			}
		})
	};
	$(".mune_yuyue").click(function(){
		$(".levin_part6").animate({top:"0%"},100);
		$(".levin_part7").animate({top:"0%"},100);
		$(".levin_part8").animate({top:"0%"},100);
		$(".levin_part9").animate({top:"0%"},100);
		if($(".tan_lio").css("display") == "none"){
			hidePart();				
			liuzifun();
		}else if($(".tan_lio").css("display") == "block"){
			$(".tan_lio").show()
		}
		
		
	})
	
	function hidePart(){
		$(".levin_part2").hide();
		$(".levin_part3").hide()
		$(".levin_part4").hide()
		$(".levin_part5").hide()
		$(".levin_part6").hide()
		$(".levin_part7").hide()
		$(".levin_part8").hide()
		$(".levin_part9").hide()
		$(".tan_lio").hide();
		console.log(225536)
		
	}
	
	
})
