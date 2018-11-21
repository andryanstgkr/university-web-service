package com.andryan.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebController {
	
	@RequestMapping(value = { "/" }, method = RequestMethod.GET)
	public ModelAndView students() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("index");
		return modelAndView;
	}

	@RequestMapping(value = { "/studentDetail/{id}" }, method = RequestMethod.GET)
	public ModelAndView studentDetailById() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student-detail");
		return modelAndView;
	}

	@RequestMapping(value = { "/studentUpdate/{id}" }, method = RequestMethod.GET)
	public ModelAndView mtdUpdateStudent() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student-update");
		return modelAndView;
	}
	@RequestMapping(value = { "/studentAdd" }, method = RequestMethod.GET)
	public ModelAndView mtdAddStudent() {
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.setViewName("student-add");
		return modelAndView;
	}
}