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
var elementNewTimeDiffOne = 0;
var elementNewTimeDiffTwo = 0;
var elementNewTimeDiffThree = 0;

var timeArray = []

$(".divSection1").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		elementTimeLeave = new Date().getTime();
		elementTimeDiffOne = Math.round((elementTimeLeave - elementTimeEnter)/1000);
		elementNewTimeDiffOne += elementTimeDiffOne;
		timeArray.splice(0, 1, elementNewTimeDiffOne); // do we need array?
		console.log(timeArray)
		console.log(elementNewTimeDiffOne);
		$("#section1").text("Section 1 Time: " + (elementNewTimeDiffOne) + " seconds");
		//return elementTimeDiff;
	});

$(".divSection2").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		elementTimeLeave = new Date().getTime();
		elementTimeDiffTwo = Math.round((elementTimeLeave - elementTimeEnter)/1000);
		elementNewTimeDiffTwo += elementTimeDiffTwo;
		console.log(elementNewTimeDiffTwo);
		$("#section2").text("Section 2 Time: " + (elementNewTimeDiffTwo) + " seconds");
		//return elementTimeDiff;
	});

$(".bigDiv").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		elementTimeLeave = new Date().getTime();
		elementTimeDiffThree = Math.round((elementTimeLeave - elementTimeEnter)/1000);
		elementNewTimeDiffThree += elementTimeDiffThree;
		console.log(elementNewTimeDiffThree);
		$("#section3").text("PeachPuff Time: " + (elementNewTimeDiffThree) + " seconds");
		//return elementTimeDiff;
	});
















});