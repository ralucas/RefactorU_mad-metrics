/////////----section elements intead of divs?
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
//Begin -  Measuring % Page View & Distance Scrolled
var scrollTop = 0;
var scrollTopLast = 0;
var scrollDiff = 0; 
var docHeight; 
var winHeight; 
var winViewPercent; 
var scrollPercent; 
var scrollPercentRounded; 
var pageViewPercent; 
var maxScroll = 0;
var addScroll = 0;
var totalScroll = 0;

$(window).scroll(function(){
		 scrollTop = $(window).scrollTop(); // distance scrolled from top
		 docHeight = $(document).height();
		 winHeight = $(window).height();
		 winViewPercent = (1-(docHeight-winHeight)/docHeight)
		 scrollPercent = ((scrollTop) / (docHeight - winHeight) * 100);
		 scrollPercentRounded = (Math.round(scrollPercent));
		 pageViewPercent =  winViewPercent + (scrollTop / docHeight)

			if(scrollPercent>maxScroll){
				maxScroll = scrollPercent
			};

			scrollDiff = Math.abs(scrollTopLast - scrollTop);
			totalScroll = totalScroll + scrollDiff;
			scrollTopLast = scrollTop;

		// console.log("scrollTop", scrollTop)
		// console.log('scrollPercentRounded',scrollPercentRounded)
		// console.log('winHeight', winHeight)
		// console.log('docHeight', docHeight)
		// console.log('pageViewPercent', pageViewPercent)
		// console.log('winViewPercent', winViewPercent)
		// console.log('scrollPercent', scrollPercent) //additive variable
		// console.log('maxScroll', maxScroll)
		// console.log('addScroll', addScroll)
		// console.log('totalScroll', totalScroll)
		// console.log('scrollTopLast', scrollTopLast)
		// console.log('scrollDiff', scrollDiff)
	});

//End - Measuring % Page View & Distance Scrolled
//
//
// Begin - Time until Sign Up
var startTimer = new Date().getTime();
var timeDiff;
var signTimer;

$('#signUpButton').on('click', function(){
	 signTimer = new Date().getTime();
	 timeDiff = (signTimer - startTimer)/1000
});
//End - Time until Sign Up
//

//Lightbox with metrics - making it appear/disappear
var metricTimer;
	$('#metricButton').on('click', function(){
		$('.lightbox').css('display', 'block')
		metricTimer = new Date().getTime() - startTimer;
	});

	$('#metricButton').on('click', function(){
		if(timeDiff === undefined) {
			$('#metricsLight').append("Page View Percent: " + (Math.round(maxScroll)) + "% </br> Total Distance Scrolled: " + totalScroll + "px</br> You haven't signed up yet! </br> Time Spent on Page: " + (metricTimer/1000))
		}
		else {
			$('#metricsLight').append("Page View Percent: " + (Math.round(maxScroll)) + "% </br> Total Distance Scrolled: " + totalScroll + "px</br> Time Before Sign Up: " + timeDiff
			+ "</br> Time Spent on Page: " + (metricTimer/1000));
		}
	})

	$('.close-button').on('click', function(){
		$('.lightbox').css('display', 'none')
		$('#metricsLight').empty()  //resets variables in lightbox info
	});

//Mouse enter/leave time tracking
var elementTimeEnter = 0;
var elementTimeLeave = 0;
var elementTimeDiff = 0;
var elementNewTimeDiff = 0;
var elementNewTimeDiffTwo = 0;
var elementNewTimeDiffThree = 0;


var timeObj = {}

var timeArray = []
//Old mouseTime
// var mouseTime = function(section){
// 		timeObj[section] = 0
// 		elementTimeLeave = new Date().getTime();
// 		elementTimeDiff = Math.round((elementTimeLeave - elementTimeEnter)/1000);
// 		elementNewTimeDiff += elementTimeDiff;
// 		timeObj[section] = timeObj[section] + elementNewTimeDiff;
// 		console.log(timeObj)
// 	}

var mouseTime = function(section){

	if (isNaN(timeObj[section]) === true){
		timeObj[section] = 0

		elementTimeLeave = new Date().getTime();

		elementTimeDiff = Math.round((elementTimeLeave - elementTimeEnter)/1000);

		timeObj[section]+= elementTimeDiff;
		
	}
	else{
		elementTimeLeave = new Date().getTime();

		elementTimeDiff = Math.round((elementTimeLeave - elementTimeEnter)/1000);

		timeObj[section]+= elementTimeDiff;

	}

}


console.log('outside', timeObj)

$(".divSection1").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		mouseTime("section1");
		$("#section1").text("Section 1 Time: " + timeObj.section1+ " seconds");
		timeArray.splice(0, 1, elementNewTimeDiff); // do we need array?
	});
		

$(".divSection2").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		mouseTime("section2");
		$("#section2").text("Section 2 Time: " + timeObj.section2 + " seconds");
		timeArray.splice(1, 1, elementNewTimeDiff); // do we need array?
	});

$(".bigDiv").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		mouseTime("section3");
		$("#section3").text("PeachPuff Time: " + timeObj.section3 + " seconds");
		timeArray.splice(2, 1, elementNewTimeDiff); // do we need array?
	});
















});