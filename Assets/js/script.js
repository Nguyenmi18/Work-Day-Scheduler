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

$("#13 .description").val(localStorage.getItem("13"));

$("#14 .description").val(localStorage.getItem("14"));

$("#15 .description").val(localStorage.getItem("15"));

$("#16 .description").val(localStorage.getItem("16"));

$("#17 .description").val(localStorage.getItem("17"));

$("#currentDay").text(moment().format("MMM Do YY"));