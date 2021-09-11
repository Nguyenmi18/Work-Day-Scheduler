$(".saveBtn").on("click", function(){
	var value = $(this).siblings(".description").val();
	var key = $(this).parent().attr("id");

	localStorage.setItem(key, value);
});


function styleHour() {
	var momentHour = moment().hours()
	 //we need to compare the momentHour to the id to check if the time is past, present, future.
	 $(".time-block").each(function(){
		 var idHour = parseInt($(this).attr("id"));

		 //create if statement that checks if the moment hour is greate than the idHour and give it a class of "past"
	
	if (idHour < momentHour){
		$(this).addClass("past")
	} else if (idHour === momentHour){
		$(this).addClass("present")
	}
	else { 
		$(this).addClass("future")

	}

	
	 })
	

}

styleHour();


$("#9 .description").val(localStorage.getItem("9"));

$("#10 .description").val(localStorage.getItem("10"));

$("#11 .description").val(localStorage.getItem("11"));

$("#12 .description").val(localStorage.getItem("12"));

$("#1 .description").val(localStorage.getItem("1"));

$("#2 .description").val(localStorage.getItem("2"));

$("#3 .description").val(localStorage.getItem("3"));

$("#4 .description").val(localStorage.getItem("4"));

$("#5 .description").val(localStorage.getItem("5"));

$("#currentDay").text(moment().format("MMM Do YY"));