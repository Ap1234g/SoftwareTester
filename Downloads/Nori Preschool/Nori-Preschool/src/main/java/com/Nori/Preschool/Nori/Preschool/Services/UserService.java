

package com.Nori.Preschool.Nori.Preschool.Services;

import com.Nori.Preschool.Nori.Preschool.Model.User;
import com.Nori.Preschool.Nori.Preschool.Repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public User registerAdmin(CustomUserDetailsService.AdminRegisterRequest request) {

        // Generate random password
        String generatedPassword = UUID.randomUUID().toString().substring(0, 8);

        User user = new User();
        user.setEmail(user.getEmail());
        user.setPassword(passwordEncoder.encode(generatedPassword));
        user.setMustChangePassword(true);

        userRepository.save(user);
        return user;

    }
}






