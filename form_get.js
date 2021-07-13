function get() {
    var url = location.href;
    var keyarr = [];
    var valuearr = [];
    if(url.indexOf("?") != -1) {
        url =  url.slice(url.indexOf("?") + 1);
        var index = 0;
        var arrindex = 0;
        if(url.length != 0) {
            while(true) {
                while(true) {
                    if(url.charAt(index) != "=") {
                        if(keyarr[arrindex] != undefined){keyarr[arrindex] += url.charAt(index);} else{keyarr[arrindex] = url.charAt(index);}
                        index++;
                    } else {
                        break;
                    }
                }
                while(true) {
                    if(url.charAt(index) != "&" || url.charAt(index) != "") {
                        index++;
                        if(url.charAt(index) == "" || url.charAt(index) == "&") {
                            break;
                        }
                        if(valuearr[arrindex] != undefined){valuearr[arrindex] += url.charAt(index);} else{valuearr[arrindex] = url.charAt(index);}
                    } else {
                        break;
                    }
                }
                index++;
                arrindex++;
                if(index + 1 > url.length) {
                    break;
                }
            }
            var returnvalue = [keyarr, valuearr];
            return returnvalue;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}
