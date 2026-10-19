package com.Nori.Preschool.Nori.Preschool.Controllers;

import com.Nori.Preschool.Nori.Preschool.Model.AdmissionForm;
import com.Nori.Preschool.Nori.Preschool.Services.AdmissionFormService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("http://localhost:8080/api/forms")

public class AdmissionFormController {


    private final AdmissionFormService service;

    public AdmissionFormController(AdmissionFormService service) {
        this.service = service;
    }

    @PostMapping("http://localhost:8080/api/register")
    public AdmissionForm registerForm(@RequestBody AdmissionForm form) {
        return service.saveAdmissionForm(form);
    }

    @GetMapping
    public List<AdmissionForm> getAllForms() {
        return service.getAllForms();
    }

    @PostMapping(value = "http://localhost:8080/api/register", consumes = {"multipart/form-data"})
    public AdmissionForm registerForm(
            @RequestPart("data") AdmissionForm form,
            @RequestPart(value = "birthCertificate", required = false) MultipartFile birthCertificate,
            @RequestPart(value = "clinicCard", required = false) MultipartFile clinicCard
    ) throws IOException {

        // Save files to folder
        String uploadDir = "uploads/";
        if (!birthCertificate.isEmpty()) {
            String path = uploadDir + birthCertificate.getOriginalFilename();
            birthCertificate.transferTo(new java.io.File(path));
            form.setBirthCertificate(path);
        }

        if (!clinicCard.isEmpty()) {
            String path = uploadDir + clinicCard.getOriginalFilename();
            clinicCard.transferTo(new java.io.File(path));
            form.setClinicCard(path);
        }

        return service.saveAdmissionForm(form);
    }

}
