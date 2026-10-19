package com.Nori.Preschool.Nori.Preschool.DTO;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class ParentDTO {

    private Long id;
    private String name;
    private String surname;
    private String homeAddress;
    private String email;
    private String password;
    private String contactNumber;
    private String maritalStatus;



}
