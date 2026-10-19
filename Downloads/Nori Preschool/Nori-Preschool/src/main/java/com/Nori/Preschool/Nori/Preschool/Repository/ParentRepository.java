package com.Nori.Preschool.Nori.Preschool.Repository;

import com.Nori.Preschool.Nori.Preschool.Model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.Repository;

public interface ParentRepository extends JpaRepository<Parent , Long> {
}
