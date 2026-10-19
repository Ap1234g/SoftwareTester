package com.Nori.Preschool.Nori.Preschool.Repository;


import com.Nori.Preschool.Nori.Preschool.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);



}
