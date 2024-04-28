var arcafe = {
    errorMsgAjax: "Connection Error. Please try again later.",
    defaultCurrency:"IDR",
    baseUrl: window.location.origin,
    currentUrl: window.location.href,
    ajax: function(url,sendData=null,callback=null,callbackError=null){
		if( !this.specialCharCheck(sendData)){
            return;
        }
        var thisClass = this;

        var timeStart = performance.now();
        // this.block();
		var pattern = /^((http|https|ftp):\/\/)/;

		var fullUrl = url;
		var postData = sendData;
		if (!pattern.test(url)) {
			fullUrl = this.baseUrl + url;
			postData = { sendData: sendData, url: this.currentUrl };
		}
		return $.ajax({
			type: "POST",
			url: fullUrl,
			data: JSON.stringify(postData),
            cache: false,
            contentType: "application/json",
            dataType: "json",
            success: function(msg){
                var timeFinish = performance.now();
                var timeDiff = timeFinish - timeStart;
                if( timeDiff < 1000 ){
                    var timeAdjust = 1000 - timeDiff;
                    setTimeout(function(){
                        // thisClass.unblock();
                        callback(msg);
                    },
                    timeAdjust);
                }
                else{
                    // thisClass.unblock();
                    callback(msg);
                }
            },
            error: function(msg){
                console.log(msg)

                let res = JSON.parse(msg.responseText);
                if(res.status.statusCode == "BAD_REQUEST_COMPANY_CHANGE"){
                    console.error(res.status.messages)
                    // toastr.error(res.status.messages);
                }else{
                    console.error(thisClass.errorMsgAjax)
                    // toastr.error(thisClass.errorMsgAjax);
                }
                // thisClass.unblock();
                if(callbackError!=null)
                    callbackError();
            }
        });
    },
    specialCharCheck: function(objectToCheck){
        // var myRegex = /'|"|`|&|>|<|\//g;
        var myRegex = /'|"|`|</g;

        if( Object.prototype.toString.call(objectToCheck) == "[object FormData]" ){
            // form data
            for(var val of objectToCheck.values()){
                var jsonValue = false;
                try {
                    jsonValue = JSON.parse(val);
                } catch (e) {
                    // 
                }

                if( typeof jsonValue == "object" ){
                    // valid json
                    var nestedResult = this.specialCharCheck(jsonValue);
                    if(!nestedResult){
                        return false;
                    }
                }
                else{
                    var nestedResult = this.specialCharCheck(val);
                    if(!nestedResult){
                        return false;
                    }
                }
            }
        }
        else if( typeof objectToCheck == "object"){
            // object or array
            for(var field in objectToCheck){
                nestedResult = this.specialCharCheck(objectToCheck[field]);
                if(!nestedResult){
                    return false;
                }
            }
        }
        else if(typeof objectToCheck == "string" && myRegex.test( objectToCheck )){
            this.openGeneralModal("Please don't use these characters ( ' , \" , ` ) in any input field.");
            return false;
        }

        return true;        
    },
    delay: function (ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    },
    capitalizeEachWord: function(str) {
        var splitStr = str.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            // You do not need to check if i is larger than splitStr length, as your for does that for you
            // Assign it back to the array
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
        }
        // Directly return the joined string
        return splitStr.join(' '); 
    },
    isset: function(myVar){
        if(typeof myVar !== 'undefined')
            return true;
        else
            return false;
    },
    init: function() {
        console.log('ar cafe started')
    }
}


function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)){
            copy[attr] = obj[attr];
        }
    }
    return copy;
}

// var newArcafe = null;
// $(document).ready(function(){
//     newArcafe = clone(arcafe);
//     pageScript.init()

// });