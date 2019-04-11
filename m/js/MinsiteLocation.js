
(function ($) {
    locationModule = {
        locationResolver: function (callback) {
            $.ajax({
                type: "get",
                async: false,
                url: "https://api.map.baidu.com/location/ip?ak=bd09ll&ak=Er8iGG4UMfSd3Ckuc6w8C56peI4ge1Ih&coor=bd09ll",
                dataType: "jsonp",
                success: function (data) {
                    if (data != null && typeof (callback) == 'function') {
                        var location = {
                            province: data.content.address_detail.province,
                            city: data.content.address_detail.city,
                            lng: data.content.point.x,
                            lat: data.content.point.x
                        }
                        callback(location);
                    }
                },
                error: function () {
                    var location = {
                        province: "广东省",
                        city: "广州市"
                    }
                    if (typeof (callback) == 'function') {
                        callback(location);
                    }
                }
            });
        },

        InitProvince: function (callbackSucc) {
            locationModule.locationResolver(function (location) {
                CurrentLocation = location;
                var pro = CurrentLocation.province;
                var cit = CurrentLocation.city;

                for (var i = 0; i < cityJson.length; i++) {
                    if (cityJson[i].name.indexOf(cit) > -1 || cit.indexOf(cityJson[i].name)>-1) {
                        initPrv = cityJson[i].parent;
                        initCity = cityJson[i].value;
                        callbackSucc({ "curProvince": initPrv, "curCity": initCity,"curCityName":cityJson[i].name });
                        break;
                    }
                }
            });
        },

        InitCity: function (callbackSucc) {
            locationModule.locationResolver(function (location) {
                CurrentLocation = location;
                var cityurl = 'javascript:void(0)';
                var cityName = CurrentLocation.city.replace('市','');
                $.each(citysiteJson, function (index, ele) {
                    if (ele["Name"] == cityName) {
                        cityurl = 'https://www.gac-toyota.com.cn' + ele["Url"];
                    }
                })
                callbackSucc({ "cityurl": cityurl, "cityName": cityName});
            });
        }
    }
})(jQuery);

