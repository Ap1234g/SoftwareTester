package com.Nori.Preschool.Nori.Preschool.Model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name ="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String email;
    private String password;

    private boolean mustChangePassword = false;
    @Enumerated(EnumType.STRING)
    private Role role; // ADMIN or PARENT






}
