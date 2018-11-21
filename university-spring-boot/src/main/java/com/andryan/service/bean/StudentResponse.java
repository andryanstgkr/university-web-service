package com.andryan.service.bean;

import java.util.List;

public class StudentResponse {
	String msg;
	List<Student> result;

	public String getMsg() {
		return msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public List<Student> getResult() {
		return result;
	}

	public void setResult(List<Student> result) {
		this.result = result;
	}

	@Override
	public String toString() {
		return "StudentResponse [msg=" + msg + ", result=" + result + "]";
	}

}
