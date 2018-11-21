package com.andryan.service.bean;

import javax.validation.constraints.NotBlank;

public class StudentSearchCriteria {
	@NotBlank(message = "Student Id can't empty!")
	private Long id;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

}
