package com.Nori.Preschool.Nori.Preschool.Services;


import com.Nori.Preschool.Nori.Preschool.Model.AdmissionForm;
import com.Nori.Preschool.Nori.Preschool.Model.Payment;
import com.Nori.Preschool.Nori.Preschool.Repository.AdmissionFormRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class PaymentService {

    private PaymentRepository PaymentRepo;


    // Location to save uploaded files
    @Value("${file.upload-dir:uploads}")
    private String uploadDir;

    public PaymentService(PaymentRepository paymentRepo) {
        this.PaymentRepo = paymentRepo;
    }

    public Payment savePayment(String referenceID, MultipartFile file) throws IOException {
        // Ensure directory exists
        Path uploadPath = Paths.get(uploadDir);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        // Save file to disk
        String fileName = referenceID + "_" + file.getOriginalFilename();
        Path filePath = uploadPath.resolve(fileName);
        Files.copy(file.getInputStream(), filePath);

        // Save admission record in DB
       Payment payment = new Payment();
        return PaymentRepo.save(payment);
    }

    public List<Payment> getAllPayments() {
        return PaymentRepo.findAll();
    }

}
