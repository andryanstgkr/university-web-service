$(document) .ready( function() {
ajaxGet();
// DO GET
function ajaxGet() {
	$.ajax({
		type : "GET",
		url : "/api/studentList",
		success : function(data) {
		console.log("status: ", data.msg);
		$('#getResultDiv ul').empty();
		var tds = "";
		$.each(data.result, function(i, student) {
			tds = "<td>" + ++i + "</td>"
			+ "<td>" + "<a href=\"/studentDetail/"+student.id+"\">" + student.name + "</a></td>"
			+ "<td>" + student.faculty.name + "</td>" 
/*			+ "<td>" + "<button type=\"button\" class=\"btn btn-link\">Delete</button>" + "</td>"
			+ "<td>" + "<button id=\"btnUpdateStudent\" type=\"button\" class=\"btn btn-primary\">Edit</button>" + "</td>";*/
			$('#table1').append( "<tr>" + tds + "</tr>");
		});
		},
		error : function(e) {
			$("#getResultDiv").html( "<strong>Error</strong>");
				console.log("ERROR: ", e);
			}
	});
}
	$("#button").on("click", "#btnAddNewStudent", function(){
	window.location.href = '/studentAdd';
		return false;
	});
});

