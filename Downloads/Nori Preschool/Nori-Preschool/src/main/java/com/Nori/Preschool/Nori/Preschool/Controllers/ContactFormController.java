package com.Nori.Preschool.Nori.Preschool.Controllers;


import com.Nori.Preschool.Nori.Preschool.Model.ContactForm;
import com.Nori.Preschool.Nori.Preschool.Repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class ContactFormController {

    @Autowired
    private ContactFormRepository contactRepo;

    // 📩 Parent sends message
    @PostMapping("http://localhost:8080/api/send")
    public ContactForm sendcontactform(@RequestBody ContactForm contact) {
        return contactRepo.save(contact);
    }

    // 📨 Admin views all messages
    @GetMapping("http://localhost:8080/api/all")
    public List<ContactForm> getAllcontact() {
        return contactRepo.findAll();
    }

    // 🔍 Admin views single message
    @GetMapping("http://localhost:8080/api/{id}")
    public ResponseEntity<ContactForm> getMessage(@PathVariable Long id) {
        return contactRepo.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // 🗑️ Admin delete message
    @DeleteMapping("http://localhost:8080/api/{id}")
    public ResponseEntity<?> deleteMessage(@PathVariable Long id) {
        contactRepo.deleteById(id);
        return ResponseEntity.ok("Message deleted");
    }

}
