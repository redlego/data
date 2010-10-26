// XMLHttpRequest
function getXHR(){
    if (window.XMLHttpRequest){
        return new window.XMLHttpRequest;
    }
    else {
        try {
            return new ActiveXObject("MSXML2.XMLHTTP.3.0");
        }
        catch(e) {
            return null;
        }
    }
}
function get(url, callback){
    var xhr = getXHR();
    if (xhr){
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function(){
            if (xhr.readyState === 4){
                callback(xhr.responseText);
            }
        };
        xhr.send(null);
    }
}
