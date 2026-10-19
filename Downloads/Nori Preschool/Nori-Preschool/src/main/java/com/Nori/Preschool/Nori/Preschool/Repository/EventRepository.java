package com.Nori.Preschool.Nori.Preschool.Repository;

import com.Nori.Preschool.Nori.Preschool.Model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
