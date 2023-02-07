function get() {
    let url = location.href;
    let karr = [];
    let varr = [];
    if(url.indexOf("?") !== -1) {
        url =  url.slice(url.indexOf("?") + 1);
        let ind = 0;
        let arrind = 0;
        if(url.length !== 0) {
            while(true) {
                while(true) {
                    if(url.charAt(ind) !== "=") {
                        if(karr[arrind] !== undefined){karr[arrind] += url.charAt(ind);} else{karr[arrinx] = url.charAt(ind);}
                        ind+= 1;
                    } else {
                        break;
                    }
                }
                while(true) {
                    if(url.charAt(ind) !== "&" || url.charAt(ind) !== "") {
                        ind+= 1;
                        if(url.charAt(ind) === "" || url.charAt(ind) === "&") {
                            break;
                        }
                        if(varr[arrind] !== undefined){varr[arrind] += url.charAt(ind);} else{varr[arrind] = url.charAt(ind);}
                    } else {
                        break;
                    }
                }
                ind+= 1;
                arrind+= 1;
                if(ind + 1 > url.length) {
                    break;
                }
            }
            var returnvalue = {};
            for (let i = 0; i<arrindex;i+=1) {
                let key = karr[i];
                let value = varr[i];
                returnvalue[key+''] = value;
            }
            return returnvalue;
        } else {
            return undefined;
        }
    } else {
        return undefined;
    }
}
