$(document).ready(function(){

// Mouse tracking heatmap?(has log function on page)
//
// $("body").mousemove(function(event) {
//   var msg = "Handler for .mousemove() called at ";
//   msg += event.pageX + ", " + event.pageY;
//   $("#log").append("<div>" + msg + "</div>");
// });
//


//
// measuring % page viewed

var scrollTop; 
var scrollDoc;
var docHeight; 
var winHeight; 
var winViewPercent; 
var scrollPercent; 
var scrollPercentRounded; 
var pageViewPercent; 
var maxScroll = 0;
var addScroll = 0;
var totalScroll = 0;
var minScroll = 0;
var botScroll = 0;
var xScroll = 0;
var minBotBound = 0


$(window).scroll(function(){
		 scrollTop = $(window).scrollTop(); // distance scrolled from top
		 scrollDoc = $(document).scrollTop();
		 docHeight = $(document).height();
		 winHeight = $(window).height();
		 botScroll = docHeight - winHeight;
		 winViewPercent = (1-(docHeight-winHeight)/docHeight)
		 scrollPercent = ((scrollTop) / (docHeight - winHeight) * 100);
		 scrollPercentRounded = (Math.round(scrollPercent));
		 pageViewPercent =  winViewPercent + (scrollTop / docHeight)

		 minBotBound =  scrollTop + winHeight;    // when = docHeight - maximum amount scrolled

			if(scrollPercent>maxScroll){
				maxScroll = scrollPercent
			};
		addScroll += (scrollTop-addScroll);
			if(addScroll>scrollTop){
				totalScroll = addScroll
			} 
			if(scrollPercent = maxScroll){
				xScroll = scrollTop    
			};




		console.log("scrollTop", scrollTop)
		console.log('scrollPercentRounded',scrollPercentRounded)
		console.log('winHeight', winHeight)
		console.log('docHeight', docHeight)
		console.log('scrollDoc', scrollDoc)
		console.log('pageViewPercent', pageViewPercent)
		console.log('winViewPercent', winViewPercent)
		console.log('scrollPercent', scrollPercent) //additive variable
		console.log('maxScroll', maxScroll)
		console.log('addScroll', addScroll)
		console.log('botScroll', botScroll)
		console.log('xScroll', xScroll)
		console.log('totalScroll', totalScroll)
	});

//
// Time until sign up
var startTimer = new Date().getTime();

console.log('startTimer', startTimer)


var timeDiff;

var signTimer;

$('#signUpButton').on('click', function(){
	 signTimer = new Date().getTime();

	 // console.log('signTimer', signTimer)

	 timeDiff = (signTimer - startTimer)/1000

	 // console.log('timeDiffinside', timeDiff)
});

// console.log('timeDiffoutside', timeDiff)


//Lightbox with metrics - making it appear/disappear
var metricTimer;
$('#metricButton').on('click', function(){
	$('.lightbox').css('display', 'block')
	metricTimer = new Date().getTime() - startTimer;

});

$('#metricButton').on('click', function(){
	$('#metricsLight').append("Page View Percent: " + (Math.round(pageViewPercent*100)) + " </br> Total Distance Scrolled: " + scrollTop + "</br> Time Before Sign Up: " + timeDiff
		+ "</br> Time Spent on Page: " + (metricTimer/1000))
})

$('.close-button').on('click', function(){
	$('.lightbox').css('display', 'none')
	$('#metricsLight').empty()  //resets variables in lightbox info
});


//Mouse enter/leave time tracking
var enterTime;
var leaveTime;
var timeArray = {}

// timeArray {element : (leaveTime-enterTime)/1000}









});