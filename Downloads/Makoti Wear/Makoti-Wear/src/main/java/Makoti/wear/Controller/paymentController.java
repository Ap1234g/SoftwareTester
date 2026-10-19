package Makoti.wear.Controller;



import Makoti.wear.Service.paymentService;
import Makoti.wear.entity.payment;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/payments")
    public class paymentController {

        private final paymentService paymentService;

        public paymentController(paymentService paymentService) {
            this.paymentService = paymentService;
        }

        @PostMapping
        public ResponseEntity<payment> createPayment(
                @Valid @RequestBody payment payment) {

            return ResponseEntity.ok(paymentService.createPayment(payment));
        }

        @GetMapping
        public ResponseEntity<List<payment>> getAllPayments() {
            return ResponseEntity.ok(paymentService.getAllPayments());
        }

        @GetMapping("/{id}")
        public ResponseEntity<payment> getPaymentById(
                @PathVariable Long id) {

            return ResponseEntity.ok(paymentService.getPaymentById(id));
        }

        @PutMapping("/{id}")
        public ResponseEntity<payment> updatePayment(
                @PathVariable Long id,
                @Valid @RequestBody payment payment) {

            return ResponseEntity.ok(paymentService.updatePayment(id, payment));
        }

        @DeleteMapping("/{id}")
        public ResponseEntity<Void> deletePayment(
                @PathVariable Long id) {

            paymentService.deletePayment(id);

            return ResponseEntity.noContent().build();
        }



}
