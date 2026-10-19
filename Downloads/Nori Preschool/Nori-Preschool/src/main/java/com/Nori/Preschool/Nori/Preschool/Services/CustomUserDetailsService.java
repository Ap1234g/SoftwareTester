package com.Nori.Preschool.Nori.Preschool.Services;


import com.Nori.Preschool.Nori.Preschool.Model.User;
import com.Nori.Preschool.Nori.Preschool.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService {

    @Autowired
    private UserRepository repo;


   // @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User u = repo.findByEmail(username).orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return org.springframework.security.core.userdetails.User
                .withUsername(u.getEmail())
                .password(u.getPassword())
                .roles(u.getRole().name())
                .build();
    }


    public static class AdminRegisterRequest {


        private String email;
        private String password;
    }
}
