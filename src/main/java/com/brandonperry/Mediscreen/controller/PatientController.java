package com.brandonperry.Mediscreen.controller;


import com.brandonperry.Mediscreen.entity.Patient;
import com.brandonperry.Mediscreen.repo.PatientRepo;
import jakarta.servlet.http.HttpServletRequest;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/patient")
@Slf4j
public class PatientController {
    @Autowired
    private PatientRepo patientRepo;

    @GetMapping("/")
    @ResponseBody
    public List<Patient> index(Model model) {
        List<Patient> patients = patientRepo.findAll();
        model.addAttribute("patients", patients);
        return patients;
    }

    @GetMapping("/findAll")
    @ResponseBody
    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }

    //FIXME change requestmapping to Post mapping
    @PostMapping("/add")
    @ResponseBody
    public Patient insert(@RequestParam String address, @RequestParam String dob, @RequestParam String family, @RequestParam String given, @RequestParam String sex, @RequestParam String phone, RedirectAttributes redirectAttributes) {
        Patient patient = Patient.builder().address(address).dob(dob).family(family).given(given).sex(sex).phone(phone).build();
        patientRepo.save(patient);
        redirectAttributes.addFlashAttribute("message", "Patient successfully added!");
        return patient;
    }

    //FIXME change requestmapping to Post mapping
    @PutMapping("/update/{id}")
    @ResponseBody
        public Patient update(@PathVariable Long id, @RequestBody Patient updatedPatient) throws Exception {
        Optional<Patient> optionalPatient = patientRepo.findById(id);
        Patient patient = null;
        Patient savedPatient = null;
        if (optionalPatient.isPresent()) {
            patient = optionalPatient.get();
log.error(updatedPatient.getAddress());
            if (updatedPatient.getAddress() != null) patient.setAddress(updatedPatient.getAddress());
            if (updatedPatient.getDob() != null) patient.setDob(updatedPatient.getDob());
//            if (updatedPatient.getFamily() != null) patient.setFamily(updatedPatient.getFamily());
//            if (given != null) patient.setGiven(given);
//            if (sex != null) patient.setSex(sex);
//            if (phone != null) patient.setPhone(phone);

            savedPatient = patientRepo.save(patient);
        } else {
            throw new Exception("Patient not found!");
        }
        log.error(savedPatient.toString());
        return savedPatient;
    }



    @GetMapping("/{id}")
    @ResponseBody
    public Patient getPatient(@PathVariable Long id) throws Exception {
        Optional<Patient> optionalPatient = patientRepo.findById(id);
        Patient patient = null;
        if (optionalPatient.isPresent()) {
            patient = optionalPatient.get();
        } else {
            throw new Exception("Patient not found!");
        }
        return patient;
    }
}
//    @PutMapping("/update/{id}")
//    public Patient update(@PathVariable Long id, HttpServletRequest request) throws Exception {
//        String address = request.getParameter("address");
//        String dob = request.getParameter("dob");
//        String family = request.getParameter("family");
//        String given = request.getParameter("given");
//        String sex = request.getParameter("sex");
//        String phone = request.getParameter("phone");
//
//        Optional<Patient> optionalPatient = patientRepo.findById(id);
//
//        if (!optionalPatient.isPresent()) {
//            throw new Exception("Patient not found!");
//        }
//
//        Patient patient = optionalPatient.get();
//
//        if (address != null) patient.setAddress(address);
//        if (dob != null) patient.setDob(dob);
//        if (family != null) patient.setFamily(family);
//        if (given != null) patient.setGiven(given);
//        if (sex != null) patient.setSex(sex);
//        if (phone != null) patient.setPhone(phone);
//
//        patientRepo.save(patient);
//
//        return patient;
//    }
//}
