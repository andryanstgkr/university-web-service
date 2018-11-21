package com.andryan.service.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.andryan.service.bean.Faculty;

@Repository
public interface FacultyRepository extends JpaRepository<Faculty, Long> {

}
