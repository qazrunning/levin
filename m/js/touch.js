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
//手指接触屏幕
document.addEventListener("touchstart", function(e){
    startx = e.touches[0].pageX;
    starty = e.touches[0].pageY;
}, false);
//手指离开屏幕
document.addEventListener("touchend", function(e) {
	
    var endx, endy;
    endx = e.changedTouches[0].pageX;
    endy = e.changedTouches[0].pageY;
    var direction = getDirection(startx, starty, endx, endy);
    switch (direction) {
        case 0:
            break;
        case 1:
            uuu();
            uuu2();
            uuu3();
            part_state = part_state + 1;
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
	
	//滑动的记录状态码;part2的状态码
	let part_state = 0;
	
	$(".ksts_btn").click(function(){
		part_state = part_state + 1;
	})
	
	function uuu(){
		if(part_state == 1){
			$("#loding").hide();
    		$(".levin_part2").show();
    		$(".part2_1_top_p1").animate({left:"0%"},500)
    		$(".part2_1_top_p2").animate({right:"0%"},500)
    		$(".part2_1_b").fadeIn(500);
    		$(".part2_1_b").addClass("part2_1_b1");
    		
		}
    	
  	};
	  function uuu2(){
	  	if(part_state == 2){
	  		//外观1的消失动画
			$(".part2_1_top").fadeOut(500);
			$(".part2_1_b").fadeOut(500);
			$(".levin_part2_1").hide().delay(500);
			//外观2的显示动画
			$(".levin_part2_2").show();
			
			var big_light_num = 20;
			var set_big = setInterval(function(){
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
	  }
	function uuu3(){
		if(part_state == 3){
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
	}
	//内饰部分向左/右滑动的代码
	function leftfunc(){
//		var l_block = $(".part3_11_img").css("display");
//		console.log(l_block)
		if($(".part3_11_img").css("display") == "none"){
			$(".part3_11_img").fadeIn(500);
			$(".yundong_beishi").show();
		}
	}
	function rightfunc(){
		
		var rr = $(".part3_11_img").css("display");
		console.log(rr)
		if($(".part3_11_img").css("display") == "block"){
			$(".part3_11_img").fadeOut(500);
			$(".yundong_beishi").hide();
		}
	}
})
