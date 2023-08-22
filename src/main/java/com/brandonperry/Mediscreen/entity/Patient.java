package com.brandonperry.Mediscreen.entity;


import jakarta.persistence.*;
import lombok.*;



@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Generated
@Table(name = "Patient")
@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String family;
    private String given;
    private String dob;
    private String sex;
    private String address;
    private String phone;

}
