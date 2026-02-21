package com.example.botcraft.Modal;

import jakarta.persistence.*;

import java.time.Instant;

@Entity
public class Subscription {


    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    @ManyToOne
    private User user;

    @ManyToOne
    private Agent agent;

    private boolean active;

    private Instant subscribedAt;

    // OAuth tokens if required
    private String accessToken;

    private String refreshToken;

    private Instant tokenExpiry;
}
