package com.brandonperry.Mediscreen.controller;


import com.brandonperry.Mediscreen.entity.Patient;
import com.brandonperry.Mediscreen.repo.PatientRepo;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Controller
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientRepo patientRepo;

    @GetMapping("/")
    public List<Patient> index(Model model) {
        List<Patient> patients = patientRepo.findAll();
        model.addAttribute("patients", patients);
        return patients;
    }

    @GetMapping("/findAll")
    public List<Patient> getAllPatients() {
        return patientRepo.findAll();
    }

    @GetMapping("/patientList")
    public ModelAndView getPatients() {
        String viewName = "patientList";
        Map<String, Object> model = new HashMap<String, Object>();
        model.put("numberOfPatients", "1234");
        return new ModelAndView(viewName, model);
    }

    //FIXME change requestmapping to Post mapping
    @PostMapping("/add")
    public Patient insert(@RequestParam String address, @RequestParam String dob, @RequestParam String family, @RequestParam String given, @RequestParam String sex, @RequestParam String phone, RedirectAttributes redirectAttributes) {
        Patient patient = Patient.builder().address(address).dob(dob).family(family).given(given).sex(sex).phone(phone).build();
        patientRepo.save(patient);
        redirectAttributes.addFlashAttribute("message", "Patient successfully added!");
        return patient;
    }

//    @PutMapping("/update/{id}")
//    public ResponseEntity<Patient> updatePatient(@PathVariable Long id, @RequestParam String address, @RequestParam String dob, @RequestParam String family, @RequestParam String given, @RequestParam String sex, @RequestParam String phone, RedirectAttributes redirectAttributes) {
//        Optional<Patient> patientOptional = patientRepo.findById(id);
//        if (patientOptional.isPresent()) {
//            Patient patient = patientOptional.get();
//            patient.setFamily(family);
//            patient.setGiven(given);
//            patient.setDob(dob);
//            patient.setSex(sex);
//            patient.setAddress(address);
//            patient.setPhone(phone);
//            patientRepo.save(patient);
//            return new ResponseEntity<>(patient, HttpStatus.OK);
//        } else {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }

    //FIXME change requestmapping to Post mapping
    @PutMapping("/update/{id}")
    public Patient update(@PathVariable Long id,
                          HttpServletRequest request,
                          RedirectAttributes redirectAttributes) throws Exception {

        String address = request.getParameter("address");
        String dob = request.getParameter("dob");
        String family = request.getParameter("family");
        String given = request.getParameter("given");
        String sex = request.getParameter("sex");
        String phone = request.getParameter("phone");

        Optional<Patient> optionalPatient = patientRepo.findById(id);
        Patient patient = null;
        if (optionalPatient.isPresent()) {
            patient = optionalPatient.get();

            if (address != null) patient.setAddress(address);
            if (dob != null) patient.setDob(dob);
            if (family != null) patient.setFamily(family);
            if (given != null) patient.setGiven(given);
            if (sex != null) patient.setSex(sex);
            if (phone != null) patient.setPhone(phone);

            patientRepo.save(patient);
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
