package Makoti.wear.Repository;

import Makoti.wear.entity.admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface adminRepository extends JpaRepository<admin, Long> {

    Optional<admin> findByUsername (String username);


}