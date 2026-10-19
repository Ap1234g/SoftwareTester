package com.Nori.Preschool.Nori.Preschool.DTO;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ContactFormDTO {

    private Long id;
    private String name;
    private String lastName;
    private String email;
    private String message;


}
