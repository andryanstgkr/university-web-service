package com.andryan.service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages= {"com.andryan"})
@EnableJpaRepositories(basePackages="com.andryan.service.repository")
public class UniversitySpringBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(UniversitySpringBootApplication.class, args);
	}
}
