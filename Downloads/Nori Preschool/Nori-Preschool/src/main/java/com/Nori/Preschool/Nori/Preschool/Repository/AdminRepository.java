package com.Nori.Preschool.Nori.Preschool.Repository;


import com.Nori.Preschool.Nori.Preschool.Model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
List<Admin> findByFirstName(String firstname);



}
