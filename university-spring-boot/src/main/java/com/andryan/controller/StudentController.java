package com.andryan.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
		import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.andryan.service.bean.Student;
import com.andryan.service.bean.StudentDetailResponse;
import com.andryan.service.bean.StudentResponse;
import com.andryan.service.exception.ResourceNotFoundException;
import com.andryan.service.repository.StudentRepository;

@Controller
@RequestMapping("/api")
public class StudentController {
	@Autowired
	StudentRepository studentRepository;

	@GetMapping("/students")
	@ResponseBody
	public List<Student> getAllStudents() {
		System.out.println("Retrieve all students started");
		List<Student> studentsList = studentRepository.findAll();
		System.out.println("studentList: " + studentsList.toString());
		return studentsList;
	}

	@GetMapping("/studentList")
	@ResponseBody
	public ResponseEntity<?> getSearchResultViaAjax() {

		StudentResponse result = new StudentResponse();

		List<Student> students = studentRepository.findAll();
		if (students.isEmpty()) {
			result.setMsg("no user found!");
		} else {
			result.setMsg("success");
		}

		result.setResult(students);
		System.out.println(result.toString());
		return ResponseEntity.ok(result);

	}

	@RequestMapping(value = "/studentDetail/{id}", method = RequestMethod.GET)
	public @ResponseBody ResponseEntity<StudentDetailResponse> findStudentById(@PathVariable long id) {
		StudentDetailResponse result = new StudentDetailResponse();
		Optional<Student> student = studentRepository.findById(id);
		if (!student.isPresent()) {
			result.setMsg("no user found!");
		} else {
			result.setMsg("success");
			result.setResult(student.get());
		}
		return ResponseEntity.ok(result);
	}

	@GetMapping("/studentUpdate/{id}")
	public @ResponseBody ResponseEntity<StudentDetailResponse> updateStudent(
			@PathVariable(value = "id") Long studentId) {

		Student student = studentRepository.findById(studentId)
				.orElseThrow(() -> new ResourceNotFoundException("Student", "id", studentId));

		StudentDetailResponse result = new StudentDetailResponse();
		if (student != null) {
			result.setMsg("success");
			result.setResult(student);
		} else {
			result.setMsg("no user found!");
		}
		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/doStudentAdd")
	public @ResponseBody ResponseEntity<StudentDetailResponse> doStudentAdd(@RequestBody Student student) {

		StudentDetailResponse result = new StudentDetailResponse();
		System.out.println("doStudentAdd: " + student);
		if (!student.getName().equals("")) {
			studentRepository.save(student);
			result.setMsg("success");
			result.setResult(student);
		} else {
			result.setMsg("failed");
		}

		return ResponseEntity.ok(result);
	}
	
	@PostMapping("/doStudentUpdate")
	public @ResponseBody ResponseEntity<StudentDetailResponse> doUpdateStudent( @RequestBody Student student) {

		Optional<Student> studentOptional = studentRepository.findById(student.getId());
		
		StudentDetailResponse result = new StudentDetailResponse();
		System.out.println("doStudentUpdate: "+student);
		if(studentOptional.isPresent()) {
			Student studentToUpdate = studentOptional.get();
			studentToUpdate.setName(student.getName());
			studentToUpdate.setFaculty(student.getFaculty());
			studentRepository.save(studentToUpdate);
			result.setMsg("success");
			result.setResult(studentToUpdate);
		}else {
			result.setMsg("failed");
		}
		
		return ResponseEntity.ok(result);
	}
	
	@DeleteMapping("/doDeleteStudent/{id}")
	public @ResponseBody ResponseEntity<StudentDetailResponse> doDeleteStudent( @PathVariable(value = "id") Long id) {

		Optional<Student> studentOptional = studentRepository.findById(id);
		
		StudentDetailResponse result = new StudentDetailResponse();
		System.out.println("doDeleteStudent: "+id);
		if(studentOptional.isPresent()) {
			Student studentToDelete = studentOptional.get();
			studentRepository.delete(studentToDelete);
			result.setMsg("success");
			result.setResult(studentToDelete);
		}else {
			result.setMsg("failed");
		}
		
		return ResponseEntity.ok(result);
	}
	
	
}
