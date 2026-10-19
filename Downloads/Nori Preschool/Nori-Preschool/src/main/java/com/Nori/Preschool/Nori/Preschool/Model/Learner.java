package com.Nori.Preschool.Nori.Preschool.Model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Table(name="Learners")
@Getter
@Setter
public class Learner {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String FullName;
    private String age;
    private String DateOfBirth;
    private String Allergies;
    private String PhysicalAddress;
    private String MedicalCondition;
    private String Preschool;
     private String Grade;
private String Progress;

@Enumerated(EnumType.STRING)
private Gender Gender;
private Disable Disable;
private TypeofDisability TypeofDisability;

   @ManyToOne
   private Parent parent;

}
