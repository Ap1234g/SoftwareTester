package com.Nori.Preschool.Nori.Preschool.Repository;

import com.Nori.Preschool.Nori.Preschool.Model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface TeacherRepository extends JpaRepository<Teacher, Long> {

}
