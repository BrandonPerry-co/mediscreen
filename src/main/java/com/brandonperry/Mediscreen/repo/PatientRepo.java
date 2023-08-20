package com.brandonperry.Mediscreen.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.brandonperry.Mediscreen.entity.Patient;

public interface PatientRepo extends JpaRepository <Patient , Integer> {
}
