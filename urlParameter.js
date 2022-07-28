
function getUrlParameter(url,parameter) {
    var urlParams=new URLSearchParams(url);
    return urlParams.get(parameter);
}

var par=getUrlParameter("https://www.kommunicate.io/poweredby?utm_source=https://www.kommunicate.io/&utm_medium=webplugin&utm_campaign=poweredby&product=shirt","product");
console.log(par);
