$(window).load(function () {
    $('#testdrive_submit').click(function () {
        SubmitTestDrive();
    });
});
$('.logo1,.logo2').click(function(){
    window.location.href="https://www.gac-toyota.com.cn/";
})

$(function(){
	$("#testdrive_submit1").on('click',function(){
		SubmitGetCatalog();
	})
})


function SubmitGetCatalog() {

   
    var obj = {
        requestList: [],
        param: {},
        callback: null
    };
    var name, mobile, chkbox, p, pn, c, cn, d;
    var modle_code, modle_name;

    var clue_type = SwitchLeadType("了解政策");
    name = $.trim($("#customer_name").val());
    if (name == "请输入姓名" || name == "您的真实姓名") {
        name = "";
    }
    mobile = $.trim($("#mobile").val());
    if (mobile == "请输入手机号" || mobile == "请输入手机号码") {
        mobile = "";
    }
	 chkbox = $("#chk_readmsg").prop("checked");
	if(isMobile) chkbox = $("#chk_readmsg").hasClass("cur");
    p = $("#selProvince").val(); pn = $("#selProvince").find("option:selected").text();
    c = $("#selCity").val(); cn = $("#selCity").find("option:selected").text()
    d = $("#selDealer").val();
    obj.callback = KnowPolicyCallBack;

    obj.requestList.push({ value: name, type: "char", valid: "姓名" });
    obj.requestList.push({ value: mobile, type: "mobile", valid: "手机号码" });
    obj.requestList.push({ value: p, type: "select", valid: "省份" });
    obj.requestList.push({ value: c, type: "select", valid: "城市" });
    obj.requestList.push({ value: d, type: "select", valid: "经销商" });
    obj.requestList.push({ value: chkbox, type: "checkbox", valid: "为了更好地提供服务,请选择允许广汽丰田使用您的个人信息" });
    
	if(modeltype=="camry"){
		modle_code = "004026";
		modle_name ="第八代凯美瑞双擎";
		
	}else{
		modle_code = "004027";
		modle_name = "C-HR";
	}

    obj.param = {
        media_code: "ba2fb5fa-d968-4ce4-83b6-ab104fd08ab8",//预约试驾渠道key
        dealer_code: d,
        clue_type: clue_type,
        modle_code: modle_code,
        modle_name: modle_name,
        province_code: p,
        province_name: pn,
        city_code: c,
        city_name: cn,
        customer_name: name,
        mobile: mobile
       
    };
    submitLeads(obj);
}


function KnowPolicyCallBack() {
    // $(".testDrive-popup1").hide();
    // $('body').css({ overflow: 'auto' });

    
    //设置初始值
    $("#customer_name").val("");
    $("#mobile").val("");


}

//预约试驾-留资接口
function SubmitTestDrive() {
    var obj = {
        requestList: [],
        param: {},
        callback: null
    };
    var name, mobile, chkbox, p, pn, c, cn, d;
    var modle_code, modle_name;

    var clue_type = SwitchLeadType("试驾申请");
    name = $.trim($("#testdrive_name").val());
    if (name == "请输入真实姓名") {
        name = "";
    }
    mobile = $.trim($("#testdrive_mobile").val());
    if (mobile == "请输入手机号码") {
        mobile = "";
    }
    chkbox = $("#p_chk_readmsg").hasClass("check");
    p = $("#testdrive_province").val(); pn = $("#testdrive_province").find("option:selected").text();
    c = $("#testdrive_city").val(); cn = $("#testdrive_city").find("option:selected").text()
    d = $("#testdrive_dealer").val();
    obj.callback = TestDrivedCallBack;

    obj.requestList.push({ value: name, type: "char", valid: "姓名" });
    obj.requestList.push({ value: mobile, type: "mobile", valid: "手机号码" });
    obj.requestList.push({ value: p, type: "select", valid: "省份" });
    obj.requestList.push({ value: c, type: "select", valid: "城市" });
    obj.requestList.push({ value: d, type: "select", valid: "经销商" });
    obj.requestList.push({ value: chkbox, type: "checkbox", valid: "为了更好地提供服务,请选择允许广汽丰田使用您的个人信息" });

    var url = location.href;
    if (url.toLowerCase().indexOf('camryxle') > -1) {
        modle_code = "004024";
        modle_name = "第八代凯美瑞";
    }
    else {
        if (url.toLowerCase().indexOf('camryxse') > -1) {
            modle_code = "004025";
            modle_name = "第八代凯美瑞运动";
        }
        else {
            if (url.toLowerCase().indexOf('camryhev') > -1) {
                modle_code = "004026";
                modle_name = "第八代凯美瑞双擎";
            }
        }
    }

    obj.param = {
        media_code: GetMediaCode('预约试驾'),// 'bee201ba-057c-485b-be89-f371f4bcf72a',//预约试驾渠道key
        dealer_code: d,
        clue_type: clue_type,
        modle_code: modle_code,
        modle_name: modle_name,
        province_code: p,
        province_name: pn,
        city_code: c,
        city_name: cn,
        customer_name: name,
        mobile: mobile
    };
    submitLeads(obj);
}

function TestDrivedCallBack() {

    //_smq.push(['custom', 'm_vehicles_camryxse', 'm_vehicles_camryxse_lead_testdrive_submit', '请回传电话号码']);
  
    locationModule.InitProvince(InitForTestDriveSucc);
}

function InitForTestDriveSucc(result) {
    var curProvince = result.curProvince;
    var curCity = result.curCity;

    $('#testdrive_province')[0].value = curProvince;
    $('#testdrive_province')[0].onchange();
    $('#testdrive_city')[0].value = curCity;
    $('#testdrive_city')[0].onchange();
    $("#testdrive_name").val('');
    $("#testdrive_mobile").val('');
	$('#testdrive_address').text('');
	
	 $('#selProvince')[0].value = curProvince;
    $('#selProvince')[0].onchange();
    $('#selCity')[0].value = curCity;
    $('#selCity')[0].onchange();
    $("#customer_name").val('');
    $("#tel").val('');
	$('#textdriverdealerAddress').text('');
	
	
}

//经销商查询-咨询底价留资
function SubmitAskPrice() {
    var obj = {
        requestList: [],
        param: {},
        callback: null
    };
    var name, mobile, chkbox, p, pn, c, cn, d, series, seriesName, model, modelName;
    var clue_type = SwitchLeadType("咨询底价");
    name = $.trim($("#customer_name3").val());
    if (name == "请输入真实姓名") {
        name = "";
    }
    mobile = $.trim($("#mobile3").val());
    if (mobile == "请输入手机号码") {
        mobile = "";
    }
    series = $("#selSeries3").val(); seriesName = $("#selSeries3").find("option:selected").text();
    model = $("#selModel3").val(); modelName = $("#selModel3").find("option:selected").text()
    chkbox = $("#chk_readmsg3").prop("checked");
    p = $("#selProvince3").val(); pn = $("#selProvince3").find("option:selected").text();
    c = $("#selCity3").val(); cn = $("#selCity3").find("option:selected").text();
    d = $("#selDealer3").val();

    obj.callback = AskPriceCallBack;

    obj.requestList.push({ value: name, type: "char", valid: "姓名" });
    obj.requestList.push({ value: mobile, type: "mobile", valid: "手机号码" });
    obj.requestList.push({ value: p, type: "select", valid: "省份" });
    obj.requestList.push({ value: c, type: "select", valid: "城市" });
    obj.requestList.push({ value: d, type: "select", valid: "经销商" });
    obj.requestList.push({ value: chkbox, type: "checkbox", valid: "为了更好地提供服务,请选择允许广汽丰田使用您的个人信息" });

    obj.param = {
        media_code: GetMediaCode('经销商-咨询底价'),//'8EBA8D79-A9AD-4E4E-ABC9-F2328DB20E30',//经销商查询-咨询底价渠道key
        dealer_code: d,
        clue_type: clue_type,
        modle_code: series,
        modle_name: seriesName,
        series_code: model,
        series_name: modelName,
        province_code: p,
        province_name: pn,
        city_code: c,
        city_name: cn,
        customer_name: name,
        mobile: mobile
    };
    submitLeads(obj);
}

function AskPriceCallBack() {
    //var mobile = $("#mobile3").val();
    //SendAdCodeByPhone('vehicles' + modelType, 'vehicles' + modelType + '_lead_testdrive_submit', mobile);
    // _jcq.push(["_formsucceed", "lowestprice"]);
    locationModule.InitProvince(InitForAskPriceSucc);
}

function InitForAskPriceSucc(result) {
    var curProvince = result.curProvince;
    var curCity = result.curCity;

    $('#selProvince3')[0].value = curProvince;
    $('#selProvince3')[0].onchange();
    $('#selCity3')[0].value = curCity;
    $('#selCity3')[0].onchange();
    $('#selSeries3')[0].value = "004001";
    $('#selSeries3')[0].onchange();

    $("#customer_name3").val('');
    $("#mobile3").val('');
}
//经销商查询-试驾申请留资
function SubmitTestDriveApp() {
    var obj = {
        requestList: [],
        param: {},
        callback: null
    };
    var name, mobile, chkbox, p, pn, c, cn, d,
        series, seriesName, pre_time, ct, bd;
    var clue_type = SwitchLeadType("试驾申请");
    name = $.trim($("#customer_name2").val());
    if (name == "请输入真实姓名") {
        name = "";
    }
    mobile = $.trim($("#mobile2").val());
    if (mobile == "请输入手机号码") {
        mobile = "";
    }
    p = Model.province;
    pn = Model.provincename;
    ///*****市*****************/
    c = Model.city;
    cn = Model.cityname;

    ///*****经销商*****************/
    d = Model.dealer;

    series = $("#selSeries2").val(); seriesName = $("#selSeries2").find("option:selected").text();
    pre_time = $("input[name=testTime]:checked").val();
    ct = $("#selectCommunicationTime").val();
    bd = $("#selectBuyDate").val();
    chkbox = $("#chk_readmsg2").prop("checked");
    obj.callback = TestDriveAppCallBack;
    obj.requestList.push({ value: name, type: "char", valid: "姓名" });
    obj.requestList.push({ value: mobile, type: "mobile", valid: "手机号码" });
    obj.requestList.push({ value: ct, type: "select", valid: "首选联络时间" });
    obj.requestList.push({ value: bd, type: "select", valid: "计划购车时间" });
    obj.requestList.push({ value: chkbox, type: "checkbox", valid: "为了更好地提供服务,请选择允许广汽丰田使用您的个人信息" });

    obj.param = {
        media_code: GetMediaCode('经销商-试驾申请'),//'F285E589-2D00-4EEC-B42D-9018A7638A0A',//经销商查询-试驾申请渠道key
        dealer_code: d,
        clue_type: clue_type,
        modle_code: series,
        modle_name: seriesName,
        province_code: p,
        province_name: pn,
        city_code: c,
        city_name: cn,
        customer_name: name,
        mobile: mobile,
        buy_date: bd,
        communication_time: ct,
        pre_time: pre_time
    };
    submitLeads(obj);
}

function TestDriveAppCallBack() {
    var mobile = $("#mobile3").val();
    _jcq.push(["_formsucceed", "dealerdrive"]);
    locationModule.InitProvince(InitForTestDriveAppSucc);
}

function InitForTestDriveAppSucc(result) {
    $('#selSeries2')[0].value = "004001";
    $('#selSeries2')[0].onchange();
    $("#customer_name2").val('');
    $("#mobile2").val('');
}

function submitLeads(obj) {
    var msg = Validation(obj.requestList);
    if (!isNullOrEmpty(msg)) {
        alert(msg);
        return false;
    }
    var ret = -1;
    var constParam = {
        clue_code: guidGenerator(),
        is_publicorder: 2,
        create_time: getNowFormatDate(),
        status: "0"
    };
    var param = $.extend({}, constParam, obj.param);
    ret = submitSalesLeads(param);
    if (ret == "1") {
        alert("提交成功,我们工作人员会在三个工作日内联系您！");
        if (obj.callback != null && obj.callback != "") {
            obj.callback();
        }
    }
    else if (ret == "-2") {
        alert('提交频繁,请1分钟后再试！');
    }
    else {
        alert('提交失败');
        //if (obj.callback != null && obj.callback != "") {
        //    obj.callback();
        //}
    }
}

function submitSalesLeads(param) {
    var str = JSON.stringify(param);
    var ret = "-1";
    $.ajax({
        url: "/Ajax/CommonHandler.ashx?method=SaveFormData&Params=" + encodeURIComponent(str),
        type: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: {},
        async: false,
        success: function (json) {
            ret = json.d;
        },
        error: function (ex) {
        }
    });
    return ret;
}

function Validation(requestList) {
    var Msg = "";
    $.each(requestList, function (idx, val) {
        var type = val.type;
        var value = val.value;
        var valid = val.valid;
        switch (type) {
            case "select":
                if (isNullOrEmpty(value)) {
                    Msg += "为了更好地提供服务，请选择" + valid + "\n";
                }
                break;
            case "char":
                if (isNullOrEmpty(value)) {
                    Msg += "为了更好地提供服务，请填写正确的" + valid + "\n"
                }
                break;
            case "mobile":
                if (!ValidateMobile(value)) {
                    Msg += "为了更好地提供服务，请填写正确的" + valid + "\n"
                }
                break;
            case "checkbox":
                if (!value) {
                    Msg += valid;
                }
                break;
        }
    })
    return Msg;
}

function isNullOrEmpty(str) {
    if (str == "" || str == null) {
        return true;
    }
    return false;
}

function ValidateMobile(str) {
    if (isNullOrEmpty(str))
        return false;
    var reg = new RegExp(/^0?1(3|4|5|7|8)\d{9}$/);
    return reg.test(str)
}

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var hour = date.getHours();
    var minu = date.getMinutes();
    var sec = date.getSeconds();

    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }

    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;

    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
            + " " + hour + seperator2 + minu
            + seperator2 + sec;
    return currentdate;
}

/*根据Form类型获取LeadType*/
function SwitchLeadType(form) {
    var leadType = "";
    //1：试驾申请
    //2：在线订车
    //3：配置价格索取
    //4：咨询底价
    //5：了解最新优惠
    //6：其它（注：针对400电话无法给出线索类型时使用）
    //7：置换订单
    //8：保养
    //9：维修
    //10:在线订购零部件
    //11:活动
    //12:金融服务咨询套餐
    //13:延保服务咨询延保
    //14:十周年抢购报名
    //15:Levin预约体验
    //16:Levin在线预定
    //17:Levin车展巡展
    //18:了解政策

    switch (form) {
        case '试驾申请':
            leadType = 1;
            break;
        case '在线订车':
            leadType = 2;
            break;
        case '咨询底价':
            leadType = 4;
            break;
        case '产品手册下载':
            leadType = 3;
            break;
        case '了解最新优惠':
            leadType = 5;
            break;
        case '活动':
            leadType = 11;
            break;
        case '金融服务咨询套餐':
            leadType = 12;
            break;
        case '延保服务咨询延保':
            leadType = 13;
            break;
        case '十周年抢购报名':
            leadType = 14;
            break;
        case 'Levin预约体验':
            leadType = 15;
            break;
        case 'Levin在线预定':
            leadType = 16;
            break;
        case 'Levin车展巡展':
            leadType = 17;
            break;
        case '了解政策':
            leadType = 18;
            break;
        default:
            leadType = "";
            break;
    }
    return leadType;
}

