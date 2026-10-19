package com.Nori.Preschool.Nori.Preschool.Services;


import com.Nori.Preschool.Nori.Preschool.Model.ContactForm;
import com.Nori.Preschool.Nori.Preschool.Repository.ContactFormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class ContactFormService {

    @Autowired
    private ContactFormRepository contactRepo;

    public ContactForm sendMessage(ContactForm contact) {
        return contactRepo.save(contact);
    }

    public List<ContactForm> getAllcontact() {
        return contactRepo.findAll();
    }

    public ContactForm getContactById(Long id ){
        return contactRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Message not found"));
    }

    public void deleteMessage(Long id) {
        contactRepo.deleteById(id);
    }

}
