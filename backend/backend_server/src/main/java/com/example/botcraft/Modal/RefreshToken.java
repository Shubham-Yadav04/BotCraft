package com.example.botcraft.Modal;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.data.annotation.Id;

import java.time.Instant;

public class RefreshToken {

//        @Id
//        @GeneratedValue(strategy = GenerationType.UUID)
        private String id;

        private String userId;

        private String token;

        private Instant expiry;
    }


