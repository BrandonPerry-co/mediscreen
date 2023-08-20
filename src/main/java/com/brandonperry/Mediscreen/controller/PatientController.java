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
    public List<Patient> getAlPatients(){
        return patientRepo.findAll();
    }

    @PostMapping("/add")
    public Patient insert(@RequestBody Patient patient){
        return patientRepo.save(patient);
    }

}
