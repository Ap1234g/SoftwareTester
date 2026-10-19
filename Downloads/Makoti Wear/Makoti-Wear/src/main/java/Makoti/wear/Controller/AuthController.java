package Makoti.wear.Controller;

import Makoti.wear.dto.LoginRequest;
import Makoti.wear.dto.LoginResponse;
import Makoti.wear.Security.JwtService;

import org.springframework.http.ResponseEntity;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import org.springframework.web.bind.annotation.*;

    @RestController
    @RequestMapping("/api/auth")
    public class AuthController {

        private final AuthenticationManager authenticationManager;
        private final JwtService jwtService;

        public AuthController(
                AuthenticationManager authenticationManager,
                JwtService jwtService) {

            this.authenticationManager = authenticationManager;
            this.jwtService = jwtService;
        }

        @PostMapping("/login")
        public ResponseEntity<LoginResponse> login(
                @RequestBody LoginRequest request) {

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.getUsername(),
                            request.getPassword()
                    )
            );

            String token =
                    jwtService.generateToken(
                            request.getUsername(),
                            "ADMIN"
                    );

            return ResponseEntity.ok(
                    new LoginResponse(
                            token,
                            request.getUsername(),
                            "ADMIN"
                    )
            );
        }



}
