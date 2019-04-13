$(document).ready(function(){
	// 加载资源
    (function () {
        var loader = new PxLoader();
        (function () {
            var i, name;
//          for (i = 0; i < 24; i++) {
//
//              if (i < 10) {
//                  name = './images/loading/segments/Segment-09_0000' + i + '.jpg';
//              } else {
//                  name = './images/loading/segments/Segment-09_000' + i + '.jpg';
//              }
//              loader.addImage(name);
//          }
            
            //预加载大灯的过度
            var _big_light = 20;
            for (_big_light;_big_light<54;_big_light++){
            	name = "images/big_light/合成 1_002"+_big_light+".jpg";
            	loader.addImage(name);
            }
            //预加载车冲出过度的序列帧
            var _car_go = 20;
            for (_car_go;_car_go<35;_car_go++){
            	name = "images/car_go/01过渡-3_001"+_car_go+".jpg";
            	loader.addImage(name);
            }
            var _neishi = 85;
            for (_neishi;_neishi<94;_neishi++){
            	name = "images/neishi/合成 1_002"+_neishi+".jpg";
            	loader.addImage(name);
            }
            var _zhongkong = 45;
            for(_zhongkong;_zhongkong<55;_zhongkong++){
            	name = "images/zhongkong/合成 1_006"+_zhongkong+".jpg";
            	loader.addImage(name);
            }
            var _loding = 40;
            for(_loding;_loding<59;_loding++){
            	name = "images/loading_af/合成 1_000"+_loding+".jpg";
            	loader.addImage(name);
            }
            var black_l = 70;
            for(black_l;black_l<74;black_l++){
            	name = "images/01-3_000"+black_l+".jpg";
            	loader.addImage(name);
            }
            var _zhineng = 583;
            for(_zhineng;_zhineng<605;_zhineng++){
            	name = "images/zhineng/合成 1_00"+_zhineng+".jpg";
            	loader.addImage(name);
            }
        }());


        loader.addProgressListener(function (e) {
            var percent = Math.round(e.completedCount / e.totalCount * 100);
            $('.loding_num').text(percent + '%');
            $('.loukong_height').height($('.loding_box_img').height() * e.completedCount / e.totalCount)
        });

        loader.addCompletionListener(function () {
        	$("#loding").hide();
        	$("#loding_af").show(function(){
        		var num_l = 40;
        		var l_af_set = setInterval(function(){
        			num_l = num_l + 1;
        			var l_src = "images/loading_af/合成 1_000"+num_l+".jpg";
        			$(".l_af").attr("src",l_src);
        			if(num_l >=59){
        				clearInterval(l_af_set);
        				$("#loding_af").hide();
        				$(".levin_part1").show(function(){
        					var l_part1 = 70;
        					var l_part1_set = setInterval(function(){
        						l_part1 = l_part1 + 1;
        						$(".levin_part1_img").attr("src","images/01-3_000"+l_part1+".jpg");
        						if(l_part1 >= 74){
        							clearInterval(l_part1_set);
        							$(".levin_part1_b").fadeIn(1000);$(".levin_part1_title").fadeIn(1000)
        							$(".levin_part1_b").addClass("loding_wenzi_show");
        							$(".levin_part1_title").addClass("loding_wenzi_show");
        							$(".levin_part1").css("z-index",7);
        							
        						}
        					},88)
        				})
        				
        			}
        		},100)
        	})
			
        });
        loader.start();
    }());
		
})
