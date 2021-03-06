function goSomewhere(x){
  location = x;
}
(function (){
  document.onmousemove = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;
    event = event || window.event; // IE-ism
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;
      event.pageX = event.clientX +
      (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
      (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
      (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
      (doc && doc.clientTop  || body && body.clientTop  || 0 );
    }
    var centerx = screen.width/2
    var centery = screen.height/2
    var centerydistance = (event.pageY-centery)/centerx
    var centerxdistance = (event.pageX-centerx)/centerx
    document.getElementById("rotate").style["transform"] = "skew("+centerxdistance+"deg,"+centerydistance+"deg)"
    document.getElementById("rotate").style["ms-transform"] = "skew("+centerxdistance+"deg,"+centerydistance+"deg)"
    document.getElementById("rotate").style["-moz-transform"] = "skew("+centerxdistance+"deg,"+centerydistance+"deg)"
    document.getElementById("rotate").style["-o-transform"] = "skew("+centerxdistance+"deg,"+centerydistance+"deg)"
    document.getElementById("rotate").style["-webkit-transform"] = "skew("+centerxdistance+"deg,"+centerydistance+"deg)"
  }
})();


function showAdVideo() {
	document.getElementById("adVideo").style.display="inline"
	document.getElementById('playAdBtn').style.display="none"
	document.getElementById('playAdImg').style.display="none"
	document.getElementById("adVideo").src="https://youtube.com/embed/7wpuelMvr1w?autoplay=1&modestbranding=1"
}