$(document).ready(
		function() {
			var path = window.location.pathname;
			var id = path.split('/')[2];

			get_student_detail(id);
			
			
			 $("#studentForm").submit(function(event) {
				event.preventDefault();
				ajaxPost();
			});
		});
function get_student_detail(id) {
$.ajax({
	type : "GET",
	url : "/api/studentDetail/"+id,
	
	success : function(data) {
		console.log("status: ", data.msg);
		console.log("data.result.faculty.id: "+data.result.faculty.id);
		var facultyId = data.result.faculty.id;
		get_faculty(facultyId);
		if (data.msg == "success") {
			$('#table1').append( "<tr><th>Name</th><td>" + "<input type=\"text\" name=\"name\" id=\"name\" value=\""+data.result.name+"\">" + "</td></tr>");
			$('#table1').append( "<tr><th>Faculty</th><td>" + "<select name=\"facultyId\" id=\"facultyId\"></select>" + "</td></tr>");
			$('#table1').append( "<input type=\"hidden\" name=\"id\" id=\"id\" value=\""+ data.result.id +"\"/>");
			$('#button').append( "<button id=\"btnSubmitStudent\" type=\"submit\" class=\"btn btn-primary\">Submit</button>");
		}else{
			$("#getResultDiv").html("<strong>Student with id: "+id+" is not found</strong>");
		}
		
	},
	error : function(e) {
		$("#getResultDiv").html("<strong>Error</strong>");
			console.log("ERROR: ", e);
		}
	});

	$('#btnCancel').click(function() {
		window.location.href = '/studentDetail/'+id;
	    return false;
	});
	
	$("#button").on("click", "#btnUpdateStudent", function(){
		window.location.href = '/studentUpdate/'+id;
		return false;
	});
	
}

function get_faculty(facultyId) {
    $.ajax({
        type: 'GET',
        url: "/api/faculties",
        success: function(faculty){
        	console.log(faculty);
            var slctSubcat=$('#facultyId'), option="";
            slctSubcat.empty();

            for(var i=0; i<faculty.length; i++){
            	if(facultyId == faculty[i].id){
            		option += "<option value='"+faculty[i].id+ "' selected>"+faculty[i].name + "</option>";
            	}else{
            		option += "<option value='"+faculty[i].id+ "'>"+faculty[i].name + "</option>";
            	}
            }
            slctSubcat.append(option);
        },
        error:function(){
            alert("error");
        }

    });
}

function ajaxPost(){
	
	// PREPARE FORM DATA
	var facultyData = {
			id : getSelectedId('facultyId'),
			name: getSelectedText('facultyId')
	}
	var formData = {
		id : $("#id").val(),
		name : $("#name").val(),
		faculty : facultyData
	}

	// DO POST
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/api/doStudentUpdate",
		data : JSON.stringify(formData),
		dataType : 'json',
		success : function(data) {
			if(data.msg == "success"){
				$("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +"Post Successfully! <br>");
				window.location.href = '/studentDetail/'+data.result.id;
			}else{
				$("#postResultDiv").html("<strong>Error</strong>");
			}
			console.log(data);
		},
		error : function(e) {
			alert("Error!")
			console.log("ERROR: ", e);
		}
	});

}


function getSelectedId(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].value;
}
function getSelectedText(elementId) {
    var elt = document.getElementById(elementId);

    if (elt.selectedIndex == -1)
        return null;

    return elt.options[elt.selectedIndex].text;
}