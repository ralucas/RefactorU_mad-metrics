$(document).ready(function(){

// Mouse tracking (has log function on page)
//
// $("body").mousemove(function(event) {
//   var msg = "Handler for .mousemove() called at ";
//   msg += event.pageX + ", " + event.pageY;
//   $("#log").append("<div>" + msg + "</div>");
// });

// measureing % page viewed
$(document).scroll(function(e){
	var scrollAmount = $(window).scrollTop();
	var documentHeight = $(document).height();
	var scrollPercent = (scrollAmount / documentHeight) * 100;
	console.log('scrollPercent', scrollPercent)
	console.log('scrollAmount', scrollAmount)
	console.log('documentHeight', documentHeight)
})


















});