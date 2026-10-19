package com.Nori.Preschool.Nori.Preschool.Repository;


import com.Nori.Preschool.Nori.Preschool.Model.Learner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearnerRepository extends JpaRepository<Learner, Long> {

}
