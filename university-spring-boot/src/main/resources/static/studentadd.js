$(document).ready(
		function() {
			get_faculty();
			$('#table1').append( "<tr><th>Name</th><td>" + "<input type=\"text\" name=\"name\" id=\"name\">" + "</td></tr>");
			$('#table1').append( "<tr><th>Faculty</th><td>" + "<select name=\"facultyId\" id=\"facultyId\"></select>" + "</td></tr>");
			$('#button').append( "<button id=\"btnSubmitStudent\" type=\"submit\" class=\"btn btn-primary\">Submit</button>");
		
			 $("#studentForm").submit(function(event) {
				event.preventDefault();
				ajaxPost();
			});
			 
			 $('#btnCancel').click(function() {
					window.location.href = '/';
				    return false;
				});
				
		});

function get_faculty() {
    $.ajax({
        type: 'GET',
        url: "/api/faculties",
        success: function(faculty){
        	console.log(faculty);
            var slctSubcat=$('#facultyId'), option="";
            slctSubcat.empty();

            for(var i=0; i<faculty.length; i++){
            	option += "<option value='"+faculty[i].id+ "'>"+faculty[i].name + "</option>";
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
		name : $("#name").val(),
		faculty : facultyData
	}

	// DO POST
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "/api/doStudentAdd",
		data : JSON.stringify(formData),
		dataType : 'json',
		success : function(data) {
			if(data.msg == "success"){
				$("#postResultDiv").html("<p style='background-color:#7FA7B0; color:white; padding:20px 20px 20px 20px'>" +"Post Successfully! <br>");
				window.location.href = '/';
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