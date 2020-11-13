$( document ).ready(function() {

	$ (".show_result").click(function() {
		event.preventDefault();
    
    	var search_result;
    
    	search_result = $("[name='search']").val();
        
        if (search_result == "") {
        	search_result = "Contact me!";

        } 

    	alert( search_result );
	});
});
