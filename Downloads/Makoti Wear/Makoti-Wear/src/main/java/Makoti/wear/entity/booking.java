package Makoti.wear.entity;


import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.time.LocalDate;

    @Entity
    @Table(name = "bookings")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class booking {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long bookingId;

        @NotNull(message = "Booking date is required")
        private LocalDate bookingDate;

        @ManyToOne
        @JoinColumn(name = "client_id", nullable = false)
        private client client;




}
