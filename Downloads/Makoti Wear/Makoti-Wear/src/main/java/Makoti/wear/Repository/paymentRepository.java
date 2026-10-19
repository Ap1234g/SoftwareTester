package Makoti.wear.Repository;

import Makoti.wear.entity.payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface paymentRepository  extends JpaRepository<payment, Long> {
}
