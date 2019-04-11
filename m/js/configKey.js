var testFlag = testFlag || "tstdriveDefault";
var IsMobile = IsMobile || false;
var modelType = modelType || "camryxle";

$(window).load(function () {
    if (location.href.toLowerCase().indexOf("camryxle") > -1) {
        modelType = "camryxle";
    }
    else if (location.href.toLowerCase().indexOf("camryxse") > -1) {
        modelType = "camryxse";
    }
    else if (location.href.toLowerCase().indexOf("camryhev") > -1) {
        modelType = "camryhev";
    }
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        IsMobile = true;
    }
    if (IsMobile) {
        $('.yysj').click(function () {
            testFlag = "tstdrivefromNav";
        });
        $('.hlights_yuyue-btn').click(function () {
            testFlag = "tstdrivefromKV";
        });
    }
    else {
        $(".h_r .test").click(function () {
            testFlag = "tstdrivefromNav";
        });
        $(".test2").click(function () {
            testFlag = "tstdrivefromKV";
        });
    }
    HideClass();
});

//隐藏对应模块
function HideClass() {
    if (IsMobile) {
        // $(".nav span:contains('购车方案')").hide();
        $(".nav span:contains('最新资讯')").hide();
        //购车方案隐藏
        // $(".plan").children().hide();
        // $(".plan").children(".make").show();
    }
    else
    {
        // $(".nav b:contains('购车方案')").hide();
        $(".nav b:contains('最新资讯')").hide();

        $(".newInfo").hide();//最新资讯
        // $(".plan").hide();//购车方案
    }
    
}

function GetMediaCode(from) {
    var MediaKey = "";
    var url = location.href;

    if (url.toLowerCase().indexOf('camryxle') > -1) {
        MediaKey = '193d3a28-7ea0-4c5c-8c7a-f7fa32508b18';
        switch (from) {
            case '预约试驾':
                if (url.toLowerCase().indexOf('appearance') > -1 || url.toLowerCase().indexOf('interior') > -1
                    || url.toLowerCase().indexOf('operate') > -1 || url.toLowerCase().indexOf('safety') > -1) {
                    MediaKey = 'b98f5f9b-00d0-446e-9fe7-823607f0cd99';
                }
                else {
                    if (testFlag == "tstdrivefromNav") {
                        if (IsMobile) {
                            MediaKey = '306c5b2b-2a5e-45ce-947a-fbdf745e6ae1';
                        }
                        else {
                            MediaKey = '25146952-e953-4bb4-958e-69c05820a7fd';
                        }
                    }
                    else if (testFlag == "tstdrivefromKV") {
                        if (IsMobile) {
                            MediaKey = '1cf3b26b-9b70-4c64-8570-efe5d2d29cfd';
                        }
                        else {
                            MediaKey = '9dc09932-d4c6-40b0-a421-f2f8b9fc5670';
                        }
                    }
                }
                break;
            case '经销商-咨询底价':
                MediaKey = "8b1055cd-f40b-400a-bc07-fe212729eb59";
                break;
            case '经销商-试驾申请':
                MediaKey = "c8ce771a-09f2-4c5c-a807-65b61a69a976";
                break;
			 case '了解详情':
                MediaKey = "5dd27110-2b7c-4c1c-b88b-0d1cc933b90f";
                break;
        }
    }
    else {
        if (url.toLowerCase().indexOf('camryxse') > -1) {
            MediaKey = 'cd88a212-a038-4a92-aa8a-008fcab5971d';
            switch (from) {
                case '预约试驾':
                    if (url.toLowerCase().indexOf('appearance') > -1 || url.toLowerCase().indexOf('interior') > -1
                     || url.toLowerCase().indexOf('operate') > -1 || url.toLowerCase().indexOf('safety') > -1) {
                        MediaKey = '3490d290-623c-4bc6-b4f8-46a43b64bc8b';
                    }
                    else {
                        if (testFlag == "tstdrivefromNav") {
                            if (IsMobile) {
                                MediaKey = '83b48550-8970-4c8b-b3a9-7b11669fd832';
                            }
                            else {
                                MediaKey = '22c4eb3e-ae00-4c84-9c6e-34048035f27a';
                            }
                        }
                        else if (testFlag == "tstdrivefromKV") {
                            if (IsMobile) {
                                MediaKey = 'd2a3c8c1-66b6-43be-802e-0ef247a9c494';
                            }
                            else {
                                MediaKey = 'b1e263db-f89f-4cd2-93a7-b048931d52dd';
                            }
                        }
                    }
                    break;
                case '经销商-咨询底价':
                    MediaKey = "0f4de19b-abd4-400f-b436-89a29651a4d3";
                    break;
                case '经销商-试驾申请':
                    MediaKey = "ec5ef1be-2564-403d-b73e-5716075e5109";
                    break;
				case '了解详情':
                    MediaKey = "fea3736e-ad80-4e2c-8258-6c50ad4e4635";
                    break;
            }
        }
        else {
            if (url.toLowerCase().indexOf('camryhev') > -1) {
                MediaKey = '0f8e6a72-7167-4c47-a08b-53cffce485eb';
                switch (from) {
                    case '预约试驾':
                        if (url.toLowerCase().indexOf('appearance') > -1 || url.toLowerCase().indexOf('interior') > -1
                        || url.toLowerCase().indexOf('operate') > -1 || url.toLowerCase().indexOf('safety') > -1) {
                            MediaKey = 'fd622d80-a7ff-49f0-bd90-f81b0834b9a8';
                        }
                        else {
                            if (testFlag == "tstdrivefromNav") {
                                if (IsMobile) {
                                    MediaKey = '8be99438-ca86-4bc9-ac8e-eb02cd204a96';
                                }
                                else {
                                    MediaKey = '8e037e8f-644b-4100-b20a-207ec32fcb10';
                                }
                            }
                            else if (testFlag == "tstdrivefromKV") {
                                if (IsMobile) {
                                    MediaKey = 'db85a21c-f268-4763-9458-693a2ce8929c';
                                }
                                else {
                                    MediaKey = 'f2cf90cf-0639-4d9b-9ec2-4dca15426ac7';
                                }
                            }
                        }
                        break;
                    case '经销商-咨询底价':
                        MediaKey = "3ca5bd2d-93fc-46a9-9335-bdf99e45519a";
                        break;
                    case '经销商-试驾申请':
                        MediaKey = "b56d75ea-4d7c-4795-b537-d01df8628dcb";
                        break;
                }
            }
        }
    }

    return MediaKey;
}