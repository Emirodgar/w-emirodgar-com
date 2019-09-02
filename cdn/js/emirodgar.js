function getDate() {
	var d = new Date();
	var n = d.getFullYear();
	return n;
}
		
$(document).ready(function(){

	$('#side-panel-content').load('../html/sidebar.html');
	
	$("#footer").load("../html/footer.html", function() {
		$("#anno").html(getDate());
	});

});
