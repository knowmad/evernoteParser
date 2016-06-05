var input = {};

// innerHTML
input.innerHTML = function(src,val) {
    var a = src.indexOf(val); // find the span
    var b = src.indexOf('>',a); // find the end of the span tag
    var c = src.indexOf('<',b); // find the beginning of the end span tag
    var str = src.substr(b+1,c-b-1);
    return str;
};

