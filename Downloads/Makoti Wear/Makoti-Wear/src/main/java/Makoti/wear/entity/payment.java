package Makoti.wear.entity;




import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;

import java.math.BigDecimal;

    @Entity
    @Table(name = "payments")
    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public class payment {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long paymentId;

        @ManyToOne
        @JoinColumn(name = "booking_id", nullable = false)
        private booking booking;

        @ManyToOne
        @JoinColumn(name = "client_id", nullable = false)
        private client client;

        @NotNull(message = "Payment amount is required")
        private BigDecimal amount;

        @Enumerated(EnumType.STRING)
        @Column(nullable = false)
        private PaymentStatus status;
    }



