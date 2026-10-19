package com.Nori.Preschool.Nori.Preschool.DataLoader;

import com.Nori.Preschool.Nori.Preschool.Model.Admin;
import com.Nori.Preschool.Nori.Preschool.Model.Event;
import com.Nori.Preschool.Nori.Preschool.Model.Learner;
import com.Nori.Preschool.Nori.Preschool.Model.Teacher;
import com.Nori.Preschool.Nori.Preschool.Repository.AdminRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.EventRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.LearnerRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.TeacherRepository;

import java.time.LocalDate;

public class ApplicationDataloader {


    private  AdminRepository adminRepo;
    private  TeacherRepository teacherRepo;
    private  EventRepository eventRepo;
    private  LearnerRepository learnerRepo;

    public void DataLoader(AdminRepository adminRepository,
                           TeacherRepository teacherRepository,
                           EventRepository eventRepository,
                           LearnerRepository learnerRepository) {

    }

    public void run(String... args) {
        // Add default Admin if not present
        if (adminRepo.count() == 0) {
            Admin admin = new Admin();
            admin.setEmail("admin@preschool.com");
            admin.setPassword("admin123"); // hashed later if security added
            adminRepo.save(admin);
        }

        // Sample Teachers
        if (teacherRepo.count() == 0) {
            teacherRepo.save(new Teacher());
            teacherRepo.save(new Teacher());
        }

        // Sample Events
        if (eventRepo.count() == 0) {
            eventRepo.save(new Event());
            eventRepo.save(new Event());

        }

        // Sample Learner
        if (learnerRepo.count() == 0) {
            learnerRepo.save(new Learner());
        }

        System.out.println("✅ Sample data loaded successfully!");
    }
}
