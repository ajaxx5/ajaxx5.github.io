
var urlString= document.location.href;
var urlArray = urlString.split('/');
var pageHREF = urlArray[urlArray.length-1];

if (pageHREF !== "") {
    var menu = document.querySelectorAll('ul#mainmenu li a');
    var i;

    for (i=0; i<menu.length; i++){
        var currentURL = (menu[i].getAttribute("href"));
        var urlsplit = currentURL;
        var arraysplit = urlsplit.split('/');
        var menuHREF = arraysplit[arraysplit.length-1];
        menu[i].parentNode.className="";
        if (menuHREF===pageHREF){
            menu[i].parentNode.className="active";
        }
    }
}