package com.brandonperry.Mediscreen.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.brandonperry.Mediscreen.entity.Patient;

import java.util.Optional;

public interface PatientRepo extends JpaRepository <Patient , Long> {
    Optional<Patient> findById(Long id);
}
