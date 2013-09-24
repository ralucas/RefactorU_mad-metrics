/////////----section elements intead of divs?
$(document).ready(function(){

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
		 pageViewPercent =  winViewPercent + (scrollTop / docHeight);

			if(scrollPercent>maxScroll){
				maxScroll = scrollPercent;
			};

		scrollDiff = Math.abs(scrollTopLast - scrollTop);
		totalScroll = totalScroll + scrollDiff;
		scrollTopLast = scrollTop;

	});

//End - Measuring % Page View & Distance Scrolled

// Begin - Time until Sign Up
var startTimer = new Date().getTime();
var timeDiff;
var signTimer;

$('#signUpButton').on('click', function(){
	 signTimer = new Date().getTime();
	 timeDiff = (signTimer - startTimer)/1000
});
//End - Time until Sign Up

//Lightbox with metrics - making it appear/disappear
var metricTimer;
var resultMt = metricTimer/1000;
var bardata = parseFloat($('td').text());
var smartbar = [0,1,2,3,4];
var tdClass = [0,1,2,3,4];

	$('#metricButton').on('click', function(){
		$('.lightbox').css('display', 'block')
		metricTimer = new Date().getTime() - startTimer;
	});

	$('#metricButton').on('click', function(){
		if(timeDiff === undefined) {
			$('#metricsLight').append("Page View Percent: " + (Math.round(maxScroll)) + "% </br> Total Distance Scrolled: " + totalScroll + "px</br> You haven't signed up yet! </br> Time Spent on Page: " + (metricTimer/1000));
		}
		else {
			$('#metricsLight').append("Page View Percent: " + (Math.round(maxScroll)) + "% </br> Total Distance Scrolled: " + totalScroll + "px</br> Time Before Sign Up: " + timeDiff
			+ "</br> Time Spent on Page: " + (metricTimer/1000));

			//Current attempt at graph----------

			// $('.graph').append("<tr><th>Total Time Spent: </th><td class='tdClass'"[i]"><div class= 'smartbar'"[i]">"+(metricTimer/1000)+"</div></td></tr><tr><th>Time to Sign Up: </th><td class='tdClass'"[i]"><div class='smartbar'"[i]">"+timeDiff+
				// "</div></td></tr><tr><th>Section 1 Time: </th><td class='tdClass'"[i]"><div class='smartbar'"[i]">"+timeObj.section1+"</div></td></tr><tr><th>Section 2 Time: </th><td class='tdClass'"[i]"><div class='smartbar'"[i]">"+timeObj.section2+
				// "</div></td></tr><tr><th>Section 3 Time: </th><td class='tdClass'"[i]"><div class='smartbar'"[i]">"+timeObj.section3+"</div></td></tr>");
			//var bardata = parseFloat($('td').text());
			// var barwidth = (bardata/(metricTimer/1000))*100;
			// $('.smartbar').css('width', (parseInt(parseFloat($('td').text())/(metricTimer/1000))*100)+"%");

			// $('td > div.smartbarTotTime').css('width', (parseInt(parseFloat($('td').text())/(metricTimer/1000))*100)+"%");
			// $('td > div.smarbarSignTime').css('width', (parseInt(parseFloat($('td').text())/(metricTimer/1000))*100)+"%");
			// $('.smartbarSec1Time').css('width', (parseInt(parseFloat($('td > div').text())/(metricTimer/1000))*100)+"%");
			// $('.smartbarSec2Time').css('width', (parseInt(parseFloat($('td > div.smartbarSec2Time').text())/(metricTimer/1000))*100)+"%");
			// $('.smartbarSec3Time').css('width', (parseInt(parseFloat($('.smartbarSec3Time').text())/(metricTimer/1000))*100)+"%");
			
			// for( var i = 0; i < 5; i++){
				// $('.smartbar'+[i]).css('width', (parseInt(parseFloat($('.tdclass'+[i]).text())/(metricTimer/1000))*100)+"%");
			//}

			//Current attempt at graph----------

		}
		
	})

	$('.close-button').on('click', function(){
		$('.lightbox').css('display', 'none')
		$('#metricsLight').empty()  //resets variables in lightbox info
		$('.graph').empty()
	});

//Mouse enter/leave time tracking

var elementTimeEnter = 0;
var elementTimeLeave = 0;
var elementTimeDiff = 0;
var elementNewTimeDiff = 0;
var elementNewTimeDiffTwo = 0;
var elementNewTimeDiffThree = 0;

var timeObj = {};

var mouseTime = function(section){
	if (isNaN(timeObj[section]) === true){
		timeObj[section] = 0;
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

$(".divSection1").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		mouseTime("section1");
		$("#section1").text("Section 1 Time: " + timeObj.section1 + " seconds");
});
		

$(".divSection2").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		mouseTime("section2");
		$("#section2").text("Section 2 Time: " + timeObj.section2 + " seconds");
});

$(".bigDiv").on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		mouseTime("section3");
		$("#section3").text("Section 3 Time: " + timeObj.section3 + " seconds");
});


});