package Makoti.wear.Repository;

import Makoti.wear.entity.booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface bookingRepository extends JpaRepository<booking, Long> {
}
