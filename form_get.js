function get() {
    var url = location.href;
    var keyarr = [];
    var valuearr = [];
    if(url.indexOf("?") !== -1) {
        url =  url.slice(url.indexOf("?") + 1);
        var index = 0;
        var arrindex = 0;
        if(url.length !== 0) {
            while(true) {
                while(true) {
                    if(url.charAt(index) !== "=") {
                        if(keyarr[arrindex] !== undefined){keyarr[arrindex] += url.charAt(index);} else{keyarr[arrindex] = url.charAt(index);}
                        index+= 1;
                    } else {
                        break;
                    }
                }
                while(true) {
                    if(url.charAt(index) !== "&" || url.charAt(index) !== "") {
                        index+= 1;
                        if(url.charAt(index) === "" || url.charAt(index) === "&") {
                            break;
                        }
                        if(valuearr[arrindex] !== undefined){valuearr[arrindex] += url.charAt(index);} else{valuearr[arrindex] = url.charAt(index);}
                    } else {
                        break;
                    }
                }
                index+= 1;
                arrindex+= 1;
                if(index + 1 > url.length) {
                    break;
                }
            }
            var returnvalue = [];
            for (let i =0;i<arrindex;i+=1) {
                var key = keyarr[i];
                var value = valuearr[i]
                returnvalue[i] = {}
                returnvalue[i]  [key+''] = value;
            }
            return returnvalue;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}
