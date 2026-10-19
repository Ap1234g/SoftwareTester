package Makoti.wear.config;



import Makoti.wear.Repository.adminRepository;
import Makoti.wear.entity.admin;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.crypto.password.PasswordEncoder;

    @Configuration
    public class AdminDataInitializer {

        @Bean
        CommandLineRunner createAdmin(
                adminRepository adminRepository,
                PasswordEncoder passwordEncoder) {

            return args -> {

                if (adminRepository.findByUsername("admin").isEmpty()) {

                    admin admin = new admin();

                    admin.setUsername("admin");

                    admin.setPassword(
                            passwordEncoder.encode("Admin@123")
                    );

                    admin.setRole("ADMIN");

                    adminRepository.save(admin);

                    System.out.println(
                            "Default Makoti Wear ADMIN created."
                    );
                }
            };
        }
    }


