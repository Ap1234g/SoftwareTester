package com.Nori.Preschool.Nori.Preschool.Controllers;


import com.Nori.Preschool.Nori.Preschool.Model.AdmissionForm;
import com.Nori.Preschool.Nori.Preschool.Model.Event;
import com.Nori.Preschool.Nori.Preschool.Repository.AdmissionFormRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.EventRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;


@RequestMapping("http://localhost:8080/api/parent")
@CrossOrigin
@RestController
public class ParentController {

    private final AdmissionFormRepository admissionRepo;
    private final EventRepository eventRepo;
    private final PaymentRepository paymentRepo;

    @Value("${app.upload.dir}")
    private String uploadDir;

    public ParentController(AdmissionFormRepository admissionRepo, EventRepository eventRepo, PaymentRepository paymentRepo) {
        this.admissionRepo = admissionRepo;
        this.eventRepo = eventRepo;
        this.paymentRepo = paymentRepo;
    }

    // Parents view calendar events
    @GetMapping("http://localhost:8080/api/events")
    public List<Event> events() { return eventRepo.findAll(); }

    // Parent submits admission form (with proof file)
    @PostMapping("http://localhost:8080/api/admissionForm")
    public ResponseEntity<?> submitAdmission(@RequestPart("data") AdmissionForm data,
                                             @RequestPart(value="file", required=false) MultipartFile file) throws Exception {
        data.setSubmittedAt(LocalDateTime.now());
        data.setStatus("PENDING");
        if (file != null && !file.isEmpty()) {
            Files.createDirectories(Paths.get(uploadDir));
            String filename = System.currentTimeMillis() + "_" + file.getOriginalFilename();
            Path p = Paths.get(uploadDir).resolve(filename);
            file.transferTo(p.toFile());
            data.setFilePath(p.toString());
        }
        admissionRepo.save(data);
        return ResponseEntity.ok(Map.of("message","Admission submitted"));
    }

    // Parent view own submissions (frontend can filter by parent email)
    @GetMapping("http://localhost:8080/api/admissions")
    public List<AdmissionForm> myForms() { return admissionRepo.findAll(); }

    @GetMapping("http://localhost:8080/api/dashboard")
    public ResponseEntity<String> getParentDashboard() {
        return ResponseEntity.ok("Welcome to the Parent Dashboard");
    }



}
