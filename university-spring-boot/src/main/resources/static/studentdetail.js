$(document).ready(
		function() {
			var path = window.location.pathname;
			var id = path.split('/')[2];

			get_student_detail(id);
		});
function get_student_detail(id) {
$.ajax({
	type : "GET",
	url : "/api/studentDetail/"+id,
	
	success : function(data) {
		console.log("status: ", data.msg);
		if (data.msg == "success") {
			$('#table1').append( "<tr><th>Name</th><td>" + data.result.name + "</td></tr>");
			$('#table1').append( "<tr><th>Faculty</th><td>" + data.result.faculty.name + "</td></tr>");
			$('#button').append( "<button id=\"btnDeleteStudent\" type=\"button\" class=\"btn btn-link\" value="+data.result.id+">Delete</button>");
			$('#button').append( "<button id=\"btnUpdateStudent\" type=\"button\" class=\"btn btn-primary\">Update</button>");
		}else{
			$("#getResultDiv").html("<strong>Student with id: "+id+" is not found</strong>");
		}
		
	},
	error : function(e) {
		$("#getResultDiv").html("<strong>Error</strong>");
			console.log("ERROR: ", e);
		}
	});

	$('#btnBack').click(function() {
		window.location.href = '/';
	    return false;
	});
	
	$("#button").on("click", "#btnUpdateStudent", function(){
		window.location.href = '/studentUpdate/'+id;
		return false;
	});
	
	$("#button").on("click", "#btnDeleteStudent", function(){
		if (confirm('Are you sure you want to delete this?')) {
	        $.ajax({
	            url: '/api/doDeleteStudent/'+$(this).val(),
	            type: "DELETE",
	            success: function () {
	            	window.location.href = '/';
	        		return false;
	            }
	        });
	    }
		
	});
	
}