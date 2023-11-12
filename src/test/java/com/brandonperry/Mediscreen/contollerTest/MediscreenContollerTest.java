package com.brandonperry.Mediscreen.contollerTest;

import com.brandonperry.Mediscreen.controller.PatientController;
import com.brandonperry.Mediscreen.entity.Patient;
import com.brandonperry.Mediscreen.repo.PatientRepo;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

public class MediscreenContollerTest {
    private MockMvc mockMvc;

    @Mock
    private PatientRepo patientRepo;

    @InjectMocks
    private PatientController patientController;

    @BeforeEach
    public void init() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders
                .standaloneSetup(patientController)
                .build();
    }

    @Test
    public void testInsertPatient() throws Exception {
        mockMvc.perform(post("/patient/add")
                        .param("address", "123 Street")
                        .param("dob", "1990-01-01")
                        .param("family", "Smith")
                        .param("given", "John")
                        .param("sex", "Male")
                        .param("phone", "1234567890"))
                .andExpect(status().isOk());
    }

    @Test
    public void testGetAllPatients() throws Exception {
        Patient patient = new Patient();
        given(patientRepo.findAll()).willReturn(Arrays.asList(patient));

        mockMvc.perform(get("/patient/findAll"))
                .andExpect(status().isOk());
    }


    @Test
    public void testInsert() throws Exception {
        mockMvc.perform(post("/patient/add")
                        .param("address", "someAddress")
                        .param("dob", "01-01-2000")
                        .param("family", "someFamily")
                        .param("given", "someGiven")
                        .param("sex", "M")
                        .param("phone", "12345678"))
                .andExpect(status().isOk());
    }
}
