//click event on the li

$("ul").on("click", "li", function(){
$(this).toggleClass("completed");
});

//click event on the span

$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
  event.stopPropagation(); 
});

//keypress event on the input (append())

$("input[type='text']").keypress(function(event){
 if(event.which === 13){
 	var todoText =($(this).val());
 	$(this).val("");
 	$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
 }
});

//fade toggle

$("#nFont").click(function(){
$("input[type='text']").fadeToggle()
});
