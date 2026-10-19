package com.Nori.Preschool.Nori.Preschool.Model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;


@Entity
@Table(name="teacher")
@Data
@Getter
@Setter
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String fullName;
    private String email;
    private String speciality;
    private String Grade;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String Schedule;


}
