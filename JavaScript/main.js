function openWin() {
    var myWindow = window.open("popup.html", "", "width=300, height=200");
    //myWindow.document.write("<p>Please Hire Me Now!</p>");
    setTimeout(function(){ myWindow.close() }, 2000);
}