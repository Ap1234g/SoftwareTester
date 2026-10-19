package Makoti.wear.Security;

import Makoti.wear.entity.admin;
import Makoti.wear.Repository.adminRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import java.util.List;

    @Service
    public class adminUserDetailsService implements UserDetailsService {

        private final adminRepository adminRepository;

        public adminUserDetailsService(adminRepository adminRepository) {
            this.adminRepository = adminRepository;
        }

        @Override
        public UserDetails loadUserByUsername(String username) {

            admin admin = adminRepository.findByUsername(username)
                    .orElseThrow(() ->
                            new RuntimeException("Admin user not found"));

            return new User(
                    admin.getUsername(),
                    admin.getPassword(),
                    List.of(
                            new SimpleGrantedAuthority("ROLE_" + admin.getRole())
                    )
            );
        }




}
