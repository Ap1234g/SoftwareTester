package Makoti.wear.entity;



import jakarta.persistence.*;
import lombok.*;

    @Entity
    @Table(name = "collections")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class collection {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long collectionId;

        @OneToOne
        @JoinColumn(name = "booking_id", nullable = false)
        private booking booking;

        @ManyToOne
        @JoinColumn(name = "dress_id", nullable = false)
        private dress dress;

        private String collectionStatus;
    }



