package com.brandonperry.Mediscreen.controller;


import com.brandonperry.Mediscreen.entity.Patient;
import com.brandonperry.Mediscreen.repo.PatientRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientRepo patientRepo;

    @GetMapping("/all")
    public String helloWorld() {
        return "Hello, World!";
    }

    @GetMapping("/findAll")
    public List<Patient> getAlPatients() {
        return patientRepo.findAll();
    }

    @PostMapping("/add")
    public Patient insert(@RequestParam String family, @RequestParam String given, @RequestParam String dob, @RequestParam String sex, @RequestParam String address, @RequestParam String phone) {
        Patient patient = Patient.builder().family(family).given(given).dob(dob).sex(sex).address(address).phone(phone).build();
        return patientRepo.save(patient);
    }

}
