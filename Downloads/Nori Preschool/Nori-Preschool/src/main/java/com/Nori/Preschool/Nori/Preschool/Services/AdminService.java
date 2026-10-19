package com.Nori.Preschool.Nori.Preschool.Services;


import com.Nori.Preschool.Nori.Preschool.Model.Admin;
import com.Nori.Preschool.Nori.Preschool.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    private AdminRepository adminRepo;

    public Admin register(Admin admin) {
        return adminRepo.save(admin);
    }

    public Optional<Admin> findById(Integer id) {
        return adminRepo.findById(id);
    }

    public List<Admin> getAll() {
        return adminRepo.findAll();
    }

    public void delete(Integer id) {
        adminRepo.deleteById(id);
    }


}
