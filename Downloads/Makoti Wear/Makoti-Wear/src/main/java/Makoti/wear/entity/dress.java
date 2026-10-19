package Makoti.wear.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

    @Entity
    @Table(name = "dresses")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class dress {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long dressId;

        @NotBlank(message = "Dress name is required")
        private String dressName;

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        private dressFabric dressFabric;

        private String imageUrl;

        @ManyToOne
        @JoinColumn(name = "client_id")
        private client client;
    }






