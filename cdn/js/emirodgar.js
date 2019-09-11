function getDate() {
	var d = new Date();
	var n = d.getFullYear();
	return n;
}

function getExperience() {
	return new Date().getFullYear() - 2007;
}
		
$(document).ready(function(){

	$('#side-panel-content').load('https://emirodgar.com/cdn/html/sidebar.html');
	
	$("#footer").load("https://emirodgar.com/cdn/html/footer.html", function() {
		$("#anno").html(getDate());
	});
	
	$(".erg_protfolio").load('https://emirodgar.com/cdn/html/portfolio.html');
	$("#section-services-seo").load('https://emirodgar.com/cdn/html/services.html');
	
	$("#section-experience").load("https://emirodgar.com/cdn/html/experience.html", function() {
		$("#anno_experience").html(getExperience());
	});
	
	

});
