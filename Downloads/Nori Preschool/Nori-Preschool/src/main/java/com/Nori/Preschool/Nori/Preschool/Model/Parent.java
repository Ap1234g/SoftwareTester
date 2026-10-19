package com.Nori.Preschool.Nori.Preschool.Model;


import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Setter
@Getter
@Table(name="Parent")
public class Parent {



 @Id
 @GeneratedValue(strategy=GenerationType.IDENTITY)
 private Long id;
 private String name;
 private String surname;
 private String homeAddress;
 private String email;
 private String password;
 private String contactNumber;
 private String maritalStatus;



}
