package com.Nori.Preschool.Nori.Preschool.DTO;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class AdmissionFormDTO {

    private Long id;

    // Child Info
    private String fullName;
    private Integer age;
    private String gender;
    private LocalDate dob;
    private String identityNumber;
    private String physicalAddress;
    private String preschool;

    // Mother Info
    private String motherName;
    private String motherSurname;
    private String motherID;
    private String motherMaritalStatus;
    private String motherContactNumber;
    private String motherHomeAddress;

    // Father Info
    private String fatherName;
    private String fatherSurname;
    private String fatherID;
    private String fatherMaritalStatus;
    private String fatherContactNumber;
    private String fatherHomeAddress;

    // Health Info
    private String allergies;
    private String disableOption;
    private String disability;
    private String medicalCondition;

    // Interests (stored as comma-separated values)
    private String interests;

    // You can store uploaded file paths if needed
    private String birthCertificate;
    private String clinicCard;
    private String momId;
    private String dadId;
    private String proofOfResidence;



}
