/////////////////////
var modeltype;
$(function () {

    function getQueryString(a) {
        var b = new RegExp("(^|&)" + a + "=([^&]*)(&|$)", "i"),
            c = window.location.search.substr(1).match(b);
        return null != c ? unescape(c[2]) : null
    }


    function getCitys(prvVal) {
        for (var res = [], i = 0; i < cityJson.length; i++) {
            if (prvVal == cityJson[i].parent) {
                res.push(cityJson[i]);
            }
        }
        return res;
    }

    function getDealer(cityVal) {
        for (var res = [], i = 0; i < dealerJson.length; i++) {
            if (cityVal == dealerJson[i].City) {
                res.push(dealerJson[i]);
            }
        }
        return res;
    }

    function getSeries(modle) {
        for (var res = [], i = 0; i < seriesJson.length; i++) {
            if (modle == seriesJson[i].parent) {
                res.push(seriesJson[i]);
            }
        }
        return res;
    }

    var initPrv, initCity;

    function setPrv(prv, city, dealer) {
        for (var i = 0, h = ''; i < provinceJson.length; i++) {
            h += '<option data-value="' + provinceJson[i].value + '" value="' + provinceJson[i].value + '">' + provinceJson[i].name + '</option>';
        }
        prv.innerHTML = h;

        prv.onchange = function () {

            var opts = this.options;
            var index = this.selectedIndex;
            var vwarp = $(this).parent().find('span');

            var text = $(opts[index]).text();

            vwarp.html(text).attr('data-value', $(this).val());

            var citys = getCitys($(this).val());

            for (i = 0, h = ''; i < citys.length; i++) {
                h += '<option data-value="' + citys[i].value + '" value="' + citys[i].value + '">' + citys[i].name + '</option>';
            }

            city.innerHTML = h;

            city.onchange = function () {
                var opts = this.options;
                var index = this.selectedIndex;
                var vwarp = $(this).parent().find('span');

                var text = $(opts[index]).text();
                vwarp.html(text).attr('data-value', $(this).val());

                if (dealer) {
                    var dealerData = getDealer($(this).val());
                    for (i = 0, h = '<option data-add="" value="">请选择</option>'; i < dealerData.length; i++) {
                        h += '<option data-add="' + dealerData[i].Address + '" value="' + dealerData[i].DealerCode + '">' + dealerData[i].DealerName + '</option>';
                    }

                    dealer.innerHTML = h;

                    dealer.onchange = function () {
                        var opts = this.options;
                        var index = this.selectedIndex;
                        var vwarp = $(this).parent().find('span');
                        var text = $(opts[index]).text();
                        vwarp.html(text).attr('data-value', $(this).val());

                        $(this).parent().parent().parent().find('.address22').html($(opts[index]).attr('data-add'));

                    }

                    dealer.onchange();
                }

            }

            city.onchange();

        }
    }

    locationModule.InitProvince(InitForProSucc);

    function InitForProSucc(result) {
        var curProvince = result.curProvince;
        var curCity = result.curCity;
        var curCityName = result.curCityName;

        $('.foot-city').html(curCityName);



        setPrv($('#testdrive_province')[0], $('#testdrive_city')[0], $('#selDealer')[0]);
        $('#testdrive_province')[0].value = curProvince;
        $('#testdrive_province')[0].onchange();
        $('#testdrive_city')[0].value = curCity;
        $('#testdrive_city')[0].onchange();

        setPrv($('#test-prv1 select')[0], $('#test-city1 select')[0], $('#test-dea1 select')[0]);
        $('#test-prv1 select')[0].value = curProvince;
        $('#test-prv1 select')[0].onchange();
        $('#test-city1 select')[0].value = curCity;
        $('#test-city1 select')[0].onchange();
    }


    $("#chk_readmsg").click(function (e) {
        $(this).toggleClass("cur");
    });

    //xiaobia  kaishi
    $('.xiao_fz').click(function (e) {
        e.stopPropagation();
        $('.bai_tan').fadeIn();
    })
    $('.bai_guan').click(function () {
        $('.bai_tan').fadeOut();
    })

    $('.player').click(function () {
        $('.bai_shi').fadeIn();
        $('.bai_shi video')[0].play();
    })

    $('.bai-bg').click(function () {
        $('.bai_shi').fadeOut();
        $('.bai_shi video')[0].pause();
    })

    $('.btn2-1,.btn4-1,.btn2-2,.btn5-1,.btn6-1,.btn7-1,.btn8-1').on('click',function(){
			
		if("btn btn2-1"==$(this).attr("class")){
			 //chr
			 modeltype="chr";
		 }else if("btn btn2-2"==$(this).attr("class")){
				//凯美瑞
			 modeltype="camry";
		 }else if("btn btn4-1"==$(this).attr("class")){
			 //凯美瑞双擎
			 modeltype="camryhev";
		 }else if("btn btn5-1"==$(this).attr("class")){
			 //雷凌
			  modeltype="levin";
		 }else if("btn btn7-1"==$(this).attr("class")){
			 //致享
			  modeltype="zhixiang";
		 }else if("btn btn8-1"==$(this).attr("class")){
			 //致炫
			 modeltype="yarisl";
		 }	
		$('.tan_lio').fadeIn(500);
    });
    $(".tan_liog").on('click',function(){
		$(".tan_lio").fadeOut(300);
		$("html").removeClass("jinzhi");
	   })	


})


//跳装到首页
$(".logo1,.logo2").on('click',function(){
	window.location.href="https://www.gac-toyota.com.cn";
})

$(function () {
    $("#phone_page").before('<iframe src="../../images/mobile/common.html" scrolling="no" class="iframe_mob"></iframe>');


    $('header .slidedown').toggle(function () {
        $('.iframe_mob').slideDown();
        $('header').css('z-index', '99999991');
    }, function () {
        $('.iframe_mob').slideUp();
        $('header').css('z-index', '100');
    })

    $('.nav_1 .nav span:last').addClass('bai_cor');

    if (/iPhone/i.test(navigator.userAgent)) { //iPhone
        $("#DE_AndroidApp").attr("href", "https://itunes.apple.com/cn/app/%E8%B6%A3%E9%A9%BE%E7%B2%BE%E8%8B%B1%E7%89%88/id1269451754?mt=8");
    } else if (/Android/i.test(navigator.userAgent)) { //Android
        $("#DE_AndroidApp").attr("href", "https://gcloudfile.gac-toyota.com.cn/library/MobileApp/WS_170913_v022_DR.apk");
    }




})