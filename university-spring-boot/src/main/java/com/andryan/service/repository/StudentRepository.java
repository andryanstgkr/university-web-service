package com.andryan.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.andryan.service.bean.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

}
