package Makoti.wear.Service;



import Makoti.wear.Repository.paymentRepository;
import Makoti.wear.entity.payment;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class paymentService {

        private final paymentRepository paymentRepository;

        public paymentService(paymentRepository paymentRepository) {
            this.paymentRepository = paymentRepository;
        }

        public payment createPayment(payment payment) {
            return paymentRepository.save(payment);
        }

        public List<payment> getAllPayments() {
            return paymentRepository.findAll();
        }

        public payment getPaymentById(Long id) {
            return paymentRepository.findById(id)
                    .orElseThrow(() -> new RuntimeException("Payment not found"));
        }

        public payment updatePayment(Long id, payment payment) {

            payment existing = getPaymentById(id);

            existing.setBooking(payment.getBooking());
            existing.setClient(payment.getClient());
            existing.setAmount(payment.getAmount());
            existing.setStatus(payment.getStatus());

            return paymentRepository.save(existing);
        }

        public void deletePayment(Long id) {
            paymentRepository.deleteById(id);
        }

}
