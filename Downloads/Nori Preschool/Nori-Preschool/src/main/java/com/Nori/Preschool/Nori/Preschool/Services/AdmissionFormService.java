package com.Nori.Preschool.Nori.Preschool.Services;


import com.Nori.Preschool.Nori.Preschool.Model.AdmissionForm;
import com.Nori.Preschool.Nori.Preschool.Model.Parent;
import com.Nori.Preschool.Nori.Preschool.Repository.AdmissionFormRepository;
import com.Nori.Preschool.Nori.Preschool.Repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdmissionFormService {

    @Autowired
    private AdmissionFormRepository admissionRepo;

    @Autowired
    private ParentRepository parentRepo;

    public AdmissionForm submitForm(Long parentId, AdmissionForm form) {
        Parent parent = parentRepo.findById(parentId)
                .orElseThrow(() -> new RuntimeException("Parent not found"));
        form.setParent(String.valueOf(parent));
        return admissionRepo.save(form);
    }

    public List<AdmissionForm> getAllForms() {
        return admissionRepo.findAll();
    }

    public AdmissionForm getFormById(Long id) {
        return admissionRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Form not found"));
    }

    public void deleteForm(Long id) {
        admissionRepo.deleteById(id);
    }



    public AdmissionForm saveAdmissionForm(AdmissionForm form) {
        return admissionRepo.save(form);
    }
}
