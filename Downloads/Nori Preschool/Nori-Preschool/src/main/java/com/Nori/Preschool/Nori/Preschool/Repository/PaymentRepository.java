package com.Nori.Preschool.Nori.Preschool.Repository;

import com.Nori.Preschool.Nori.Preschool.Model.Event;
import com.Nori.Preschool.Nori.Preschool.Model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
