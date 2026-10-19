package com.Nori.Preschool.Nori.Preschool.Controllers;


import com.Nori.Preschool.Nori.Preschool.Model.Payment;
import com.Nori.Preschool.Nori.Preschool.Services.PaymentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("http://localhost:8080/api/payment")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("http://localhost:8080/api/submit")
    public ResponseEntity<?> submitPayment(
            @RequestParam("referenceID") String referenceID,
            @RequestParam("document") MultipartFile document) {
        try {
            Payment saved = paymentService.savePayment(referenceID, document);
            return ResponseEntity.ok(saved);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed");
        }
    }

    @GetMapping("http://localhost:8080/api/all")
    public List<Payment> getAllAdmissions() {
        return paymentService.getAllPayments();
    }



}
