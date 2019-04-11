

'use strict';

// JavaScript Document
	

(function (L, root) {

	//'use strict';

	document.addEventListener(!L.yz.wx ?'DOMContentLoaded': self != top ? 'DOMContentLoaded' :'WeixinJSBridgeReady', 
		function () {
		var _site = 'http://' + root.location.host + '/jingcai/',
		    _api = _site + 'api/',
		    $c = L.$.$c,
		    tool = L.tool,
		    yz = L.yz,
		    fx = L.fx,
		    event = L.event.eventEnd,
		    _default_img = _site+"images/share.jpg",
		    _default_url = _site,
		    _default_url2 = root.location.href,
		    _default_title ='',
		    _default_desc = "",
		    Sprite = fx.sprite,
		    creatSlider = function creatSlider(p, dir, id, type, hash) {
			return new fx.slide(p, dir || "h", id || 15, type || 'css', hash);
		},
		    creatSwiper = function creatSwiper(warp, opt) {
			var opt = opt || {};
			opt.warp = warp;
			opt.preventDefault == undefined ? !0 : opt.preventDefault;
			var swiper = new L.fx.swiper(opt);
			swiper.init();
			return swiper;
		},
		    createAnimation = function createAnimation(lib, img, loop, canvas, animation, src) {
			var a = fx.flashCC(lib, img, createjs, loop);
			return new a(canvas, animation, src);
		},
		    creat = function creat(tag, w, h) {
			var c = document.createElement(tag);if (tag == 'canvas') {
				c.width = w || 100;
				c.height = h || 100;
			}return c;
		},
		    get = function get(s, f) {
			var fa = f || document;
			return fa.querySelector(s);
		},
		    getAll = function getAll(s, f) {
			var fa = f || document;
			return fa.querySelectorAll(s);
		},
		    alertText = new fx.alertText({
			background: '#081e37',
			buttonBg: '#e9746f',
			color: '#fff',
			buttonColor: '#fff'
		}),
		    qh,
		    transformStyle = tool.prefixedSupport('transform'),
		    transitionStyle = tool.prefixedSupport('transition');

		var loadSrc = [],
		    _imageTags = getAll('img'),
		    autoLoadBackgroundImage = false,
		    linearGradient = /-gradient|linear-gradient|filter:/gi;

		if (_imageTags.length) {
			for (var i = 0, k = _imageTags.length; i < k; i++) {
				if (_imageTags[i].getAttribute('data-src')) {
					loadSrc[i] = _imageTags[i].getAttribute('data-src');
				} else {
					loadSrc[i] = _imageTags[i].src;
				}
			}
		}
		if (autoLoadBackgroundImage) {
			var allTags = getAll('*');
			for (var i = 0, j = allTags.length; i < j; i++) {
				var str = getComputedStyle(allTags[i], false)['backgroundImage'];
				if (str && str != 'none' && !linearGradient.test(str)) {
					if (/http:|https:/gi.test(str)) {
						str = str.replace('url(', "").replace(')', "").replace(/"|'/g, '');
					} else {
						if (str.indexOf('images/') != -1) str = 'images/' + str.split('images/')[1].replace(')', "").replace(/"|'/g, '');
					}
					loadSrc.push(str);
				}
			}
		}

		var appId, nonceStr, signature, timestamp;
		var isTestSite = _default_url2.indexOf('4ait.com') != -1;
		var jssdkSettings = {
			url: isTestSite ? 'http://api.4ait.com/wechat/share.php' : 'http://api.rowchina.cn/wechat/share.php',
			type: 'post',
			dataType: isTestSite ? 'jsonp' : 'jsonp',
			//async : isTestSite ? true : false ,
			data: { url: _default_url2 },
			succ: function succ(a) {

				appId = a.appId;
				nonceStr = a.nonceStr;
				signature = a.signature;
				timestamp = a.timestamp;

				wx.config({
					debug: _default_url2.indexOf('jssdk') != -1,
					appId: appId,
					timestamp: timestamp,
					nonceStr: nonceStr,
					signature: signature,
					jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
				});

				wx.ready(function () {

					wx.onMenuShareTimeline(setShareContent(1));

					wx.onMenuShareAppMessage(setShareContent(0));
				});
			}

		};
		

		//tool.getData (jssdkSettings);
		
		//qh = creatSlider(getAll('.page'), 'h',15, 'js');
		//qh.loop = false;
		//qh.speed = .6;

		function shareSucc() {
			_hmt.push(['_trackPageview', 'share']);
		}
		function setShareContent(isTimeline, title, Desc, img, url) {
			var title = title ? title : _default_title;
			return {
				title: !isTimeline ? title : Desc ? Desc : _default_desc,
				link: url || _default_url,
				imgUrl: img || _default_img,
				desc: Desc || _default_desc,
				success: shareSucc
			};
		}


	

		
		//qh.startFn = animationTween;

		//loadSrc.push('images/loading.gif');

		var loadingContent = get('.loading p');
	


		var stoped = false;

		var slider = creatSlider(get('.p1-box').children, 'h',19, 'js');
		slider.speed = .6;

		slider.startFn = function (i,p) {
			switch ( i ) {
				case 0 :
					$('.box1-1').stop().fadeIn(1200);
					$('.jiqi-text').stop().fadeOut(500);
					$('.p1-text2-1').stop().fadeOut(800);
					fx.tween (get('.p1-0'), .6 , { translateY : [80,0] , opacity: [0,1], delay : .3});
					fx.tween (get('.ljgm'), .6 , { translateY : [80,0] , opacity: [0,1], delay : .5});

					
					$('.smoke1').fadeOut(800,function () {
						smoke.stop();
					});
					get('.p1-zhuozi').classList.remove('show');
					get('.jiqi-2').style.opacity = 0;
					get('.header').classList.remove('up');
					get('.header1').classList.remove('up');
				
					break;
				case 1 :

					get('.header').classList.add('up');
					get('.header1').classList.add('up');
					stoped = true ;
					$('.box1-1').stop().fadeOut(1200);
					$('.p1-text2-1').stop().fadeOut(800);

					fx.tween (get('.p1-textwarp').children, .5 , { translateY : [40,0] , opacity: [0,1], delay :function (e,index) { return index * 100 + 200} ,complete: function () {
						
						stoped = false ;
						/*fx.tween (get('.p1-textwarp').children, .5 , { translateY : [0,-40] , opacity: [1,0], delay :function (e,index) { return index * 100 + 600} ,complete: function () {
							
						}});*/
						/*setTimeout (function () {
							if ( slider.current == 1) {
								get('.jiqi-2').style.opacity = 1;
								$('.smoke1').fadeIn (800);
								smoke.play();
								get('.p1-zhuozi').classList.add('show');

								stoped = false ;
							}
						} ,1400);*/
					}});
					
					
					break;
					
					case 2 :
						fx.tween (get('.p1-text1'), .6 , { translateY : [80,0] , opacity: [0,1], delay : .2});
						setTimeout (function () {

							get('.jiqi-2').style.opacity = 1;
							$('.smoke1').fadeIn (800);
							smoke.play();
							get('.p1-zhuozi').classList.add('show');

							stoped = false ;
							
						} ,300);
						break;

					case 3 :
						get('.header').classList.add('up');
						get('.header1').classList.add('up');
						$('.p1-text2-1').stop().fadeIn(1200);
						$('.jiqi-text').stop().fadeOut(500);
						fx.tween (get('.p1-text2'), .7 , { translateY : [80,0] , opacity: [0,1], delay :.2});
						break;
					case 4 :
						get('.header').classList.add('up');
						get('.header1').classList.add('up');
						$('.p1-text2-1').stop().fadeOut(500);
						$('.jiqi-text').stop().fadeIn(1200);
						fx.tween (get('.p1-text3'), .7 , { translateY : [80,0] , opacity: [0,1], delay :.2});
						break;
			}
		}

		//setQuestionData();
		var smoke = new fx.sprite(14,true );
		var smoke2 = new fx.sprite(14,true );
		var smoke3 = new fx.sprite(14,true );
		var qiliu =  new fx.sprite(14,true );
		var dongli =  new fx.sprite(10,true );
		//var videofps =  new fx.sprite(10,true );
		var qiliuArr= [];
		var dongliArr= [];
		for ( var i=1; i<17; i++ ) {
			loadSrc.push({ groupid : 'yan', id : 'yan-'+i, src : 'images/fps/yan/'+i+'.png'});
		}
		for ( var i=1; i<24; i++ ) {
			qiliuArr.push({ groupid : 'qiliu', id : 'qiliu-'+i, src : 'images/fps/kongqi/'+i+'.png'});
		}
		for ( var i=1; i<28; i++ ) {
			qiliuArr.push({ groupid : 'dongli', id : 'dongli-'+i, src : 'images/fps/dongli/'+i+'.jpg'});
		}
		for ( var i=1; i<40; i++ ) {
			//qiliuArr.push({ groupid : 'videofps', id : 'videofps-'+i, src : 'images/fps/videofps/'+i+'.jpg'});
		}
		
		function downloadQiliu () {
			tool.imgLoader({
				img: qiliuArr,
				preload: true ,
				callback: function (data) {
					qiliu.initDraw (get('.qiliu'), data['qiliu']);
					qiliu.play();
					
					dongli.initDraw (get('.stage-dongli'), data['dongli']);
					dongli.play();
					
					//videofps.initDraw (get('.videofps'), data['videofps']);
					//videofps.play();
				}
			})
		}
		
		var scrolling = false;
	
		
		var p11_sliderbg = creatSlider(get('.b11-main').children, 'h',19, 'js');
		p11_sliderbg.speed = .6;

		var p11_box_timer =null;
		var p11_slider_box4 = creatSlider(get('.b11-main-4').children, 'h',19, 'js');
		p11_slider_box4.speed = .6;
		p11_slider_box4.loop = true ;
		p11_slider_box4.startFn = function (i) {
			$('.p8-dots span').removeClass('active').eq(i).addClass('active');
		}
		
		$c('.p8-dots span').on('click', function (){

			p11_stop ();
			p11_slider_box4.jump(this.index);
			setTimeout (function () {
				p11_start();	
			},3000);
		})
		
		function p11_start (){
			clearInterval (p11_box_timer);
			p11_box_timer= setInterval (function () {
				p11_slider_box4.next ();
			} ,3500);
		}
		function p11_stop (){
			clearInterval (p11_box_timer);
		}
		
		$(".an").addClass("wow fadeInUp");
		var  wow = new WOW({
			 nimateClass: 'animated',
			 offset: 100
		});
		wow.init();

		tool.imgLoader({
			img: loadSrc,
			preload: true ,
			onloading: function onloading(p) {
				if ( loadingContent )
				loadingContent.textContent = ''+parseInt(p)+ '%';

			},
			callback: function callback(dataImg) {

				loadSrc = null;

				smoke.initDraw (get('.smoke'), dataImg['yan']);
				smoke.stop(0);

				smoke2.initDraw (get('.smoke2'), dataImg['yan']);
				//smoke2.stop(0);
				smoke2.play();

				smoke3.initDraw (get('.smoke3'), dataImg['yan']);
				//smoke3.stop(0);
				smoke3.play();
				
				

				slider.startFn(0,get('.p1-box').children[0])
				get ('.loading') && fx.tween (get ('.loading') , 1.2 , {opacity: [1,0 ], complete :function () {
					tool.hide (get ('.loading'));	
				}});


				fx.tween (get('.box1-1'), 1 ,{ opacity: [0,1] ,delay : .8 });
				fx.tween (get('.box1-2'), .6 ,{translateY: [-150, 0], opacity: [0,1] ,delay : .4 ,complete :function () {
					downloadQiliu();	
				}});

				$c('.ljgm').tap(function () {
					window.location.href ='http://www.efotile.com/productdetail/_t-1/_proid-1827.html';
				});
				$c('.box1').addTouch ({
					swipeUp : function () {
						if ( stoped  ) return; 
						if ( slider.current < 4 ) {
							slider.next ()
						}else  {
							scrolling = true ;
							$('html,body').animate({ scrollTop :  get('.box-2').offsetTop} ,500 ,function () {
								scrolling = false ;
							});

						}
					},
					swipeDown: function () {
						if ( stoped  || slider.current == 0 ) return; 
						if (  slider.current == 3 ) {
							slider.jump (0)
						} else {
							slider.prev ()
						}
					
					},
					preventDefault: true 
				});
				
				
				var tDots = getAll('.topdots span');
				var headItems = getAll('.headitem');
				var headHeight = get('.header').offsetHeight;
				function setNav (st) {
					var index = 0;
					if ( st >= get('.box-11').offsetTop - headHeight-30 )	{
						index = 4;
					} else if ( st >= get('.box-8').offsetTop - headHeight-30 ) {
						index = 3;	
					}
					else if ( st >= get('.box-5').offsetTop - headHeight-30 ) {
						index = 2;	
					}
					else if ( st >= get('.box-4').offsetTop - headHeight-30 ) {
						index = 1;	
					}
					else if ( st >= get('.box-2').offsetTop - headHeight-30 ) {
						index = 0;	
					}
					
					for ( var i=0; i<headItems.length; i++ ) {
						headItems [i].classList.remove ('active');	
						tDots [i].classList.remove ('active');	
					}
					headItems[index].classList.add ('active');	
					tDots[index].classList.add ('active');
					
					if ( index == 4 ) {
						get('.head-warp').scrollLeft = 	get('.head-warp').scrollWidth - get('.head-warp').offsetWidth;
					}else {
						get('.head-warp').scrollLeft = 0;	
					}
					return index;
				}
				
				window.addEventListener('scroll', function () {
					var st =document.documentElement.scrollTop || document.body.scrollTop;
					/*if ( st < get('.box-2').offsetTop -10 ) {
						if ( !scrolling ) {
							$('html,body').animate({ scrollTop :  0 } ,300 );
						} 
					}*/
					
					if ( st > 0 ){
						get('.header').classList.add('up');
						get('.header1').classList.add('up');	
					}else {
						if ( slider.current == 0 ) {
							get('.header').classList.remove('up');
							get('.header1').classList.remove('up');	
						}	
					}
					
					 setNav (st);
 					
					
				} ,false );
				
				setNav (document.documentElement.scrollTop || document.body.scrollTop);

				//document.body.scrollTop = 0;
				//document.documentElement.scrollTop = 0;
				//$('html,body').animate({ scrollTop :  0 } ,10 );

				var btnbox= getAll('.btnbox');
				$c('.btnbox').on('click', function () {
					var child = getAll('.btnbox',this.parentNode);
					for ( var i=0; i<child.length; i++ ) {
						child[i].classList.remove('active');
					}
					this.classList.add('active');
				});


				var b11_itembox = getAll('.b11-itembox');
				var b11_btn     = getAll('.b11-btn');
				var b11_index = 0;
				$c(b11_itembox).on('click', function () {
					if ( this.classList.contains('open') )return;

					p11_stop();
					b11_index = this.index;
					for (var i=0; i< b11_itembox.length; i++ ) {
						b11_itembox[i].classList.remove('open');
						b11_itembox[i].classList.add('close');
					}
					this.classList.remove('close');
					this.classList.add('open');

					p11_sliderbg.jump(b11_index);
					$('.b11-main').fadeIn(1000);

					if ( b11_index== 3 ) {
						p11_start();
					}

				});
				$c(b11_btn).on('click', function (e) {
					e.preventDefault();
					e.stopPropagation();
					p11_stop();
					if ( this.parentNode.classList.contains('open') ){
						for (var i=0; i< b11_itembox.length; i++ ) {
							b11_itembox[i].classList.remove('close');
						}
						this.parentNode.classList.remove('open');
						$('.b11-main').fadeOut(1000);
					}else {
						b11_index = this.index ;
						for (var i=0; i< b11_itembox.length; i++ ) {
							b11_itembox[i].classList.remove('open');
							b11_itembox[i].classList.add('close');
						}
						this.parentNode.classList.remove('close');
						this.parentNode.classList.add('open');
						p11_sliderbg.jump(b11_index);
						$('.b11-main').fadeIn(1000);

						if ( b11_index== 3 ) {
							p11_start();
						}
					}
				})

				

				if ( yz.ad ) {
					get('.video1').setAttribute ('webkit-playsinline','true');
					get('.video1').setAttribute ('playsinline','true');
					get('.video2').setAttribute ('webkit-playsinline','true');
					get('.video2').setAttribute ('playsinline','true');
				}
				$c('.p5-btn').on('click', function () {
					get('.video1').play();
				});
				$c('.p6-btn').on('click', function () {
					get('.video2').play();
				});
				
				$c('.p8-videobtn').on('click', function () {
					get('.video3').play();
				});

				var b14_tab = getAll('.b14-tab');
				$c('.b14-btn').on('click', function () {
					if ( this.classList.contains ('active') ) return ;
					$('.b14-btn').removeClass('active');
					this.classList.add ('active') ;
					$(b14_tab).hide();
					b14_tab[this.index].style.display ='block';

				});
				
				$c('.toparrow').on('click', function () {
					get('.header').classList.toggle('open');	
				})
				
				$c('.headitem').on('click',function () {
					if ( this.classList.contains('active') ) return;
					scrolling = true ;
					$(tDots).removeClass('active');
					tDots[this.index].classList.add('active');

					var target =get('.box-'+ this.dataset.pos);
					$('html,body').animate({ scrollTop : target.offsetTop - get('.header').offsetHeight }, 700 );
					
					get('.header').classList.toggle('open');
				});
				
				var p8_slider = creatSlider(get('.p8-warp-1').children, 'h',19, 'js');
					p8_slider.speed = .6;
				
				$c('.box-8 .local').on('click', function () {
					$('.p8-warp-1').fadeIn();
					p8_slider.jump(this.index);
					$('.local').show();
					this.style.display='none';
				});
				$c('.p8-warp-1').on('click', function () {
					$('.p8-warp-1').fadeOut();
					$('.local').show();
				});

				//qh.jump(1)
				setTimeout(function () {	
					get('#box').style.opacity = 1;		
				},400);
			}
		});
	});
})(_liuLiang, this);