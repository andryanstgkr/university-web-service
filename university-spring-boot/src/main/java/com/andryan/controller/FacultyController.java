package com.andryan.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.andryan.service.bean.Faculty;
import com.andryan.service.repository.FacultyRepository;

@Controller
@RequestMapping("/api")
public class FacultyController {
	@Autowired
	FacultyRepository facultyRepository;

	@GetMapping("/faculties")
	@ResponseBody
	public List<Faculty> getAllFaculties() {
		System.out.println("Retrieve all faculties started");
		List<Faculty> facultiesList = facultyRepository.findAll();
		System.out.println("facultiesList: "+facultiesList.toString());
		return facultiesList;
	}
}
