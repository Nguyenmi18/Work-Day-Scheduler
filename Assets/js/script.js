$(".saveBtn").on("click", function(){
	var value = $(this).siblings(".description").val();
	var key = $(this).parent().attr("id");

	localStorage.setItem(key, value);
})