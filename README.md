RefactorU_mad-metrics
=====================
$(this).on('mouseenter', function (){
		elementTimeEnter = new Date().getTime();
	}).on('mouseleave', function(){
		elementTimeLeave = new Date().getTime();
		elementTimeDiff = elementTimeLeave - elementTimeEnter;
		
		return elementTimeDiff;
	});
