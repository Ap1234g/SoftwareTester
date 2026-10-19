package com.Nori.Preschool.Nori.Preschool.Services;



import com.Nori.Preschool.Nori.Preschool.Model.Parent;
import com.Nori.Preschool.Nori.Preschool.Repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ParentService {


    @Autowired
    private ParentRepository parentRepo;

    public Parent register(Parent parent) {
        return parentRepo.save(parent);
    }

    public List<Parent> getAllParents() {
        return parentRepo.findAll();
    }

    public Optional<Parent> getParentById(Long id) {
        return parentRepo.findById(id);
    }

    public void deleteParent(Long id) {
        parentRepo.deleteById(id);
    }

}
