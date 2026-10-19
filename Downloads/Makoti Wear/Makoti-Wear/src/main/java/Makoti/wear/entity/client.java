package Makoti.wear.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

import java.util.Collection;

@Entity
    @Table(name = "clients")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor


    public class client {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @NotBlank(message = "Name is required")
        private String name;

        @NotBlank(message = "Surname is required")
        private String surname;

        @NotBlank(message = "Address is required")
        private String address;

        @NotBlank(message ="cellphone is required")
        private String cellphone;

}
