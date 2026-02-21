package com.example.botcraft.Modal;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String id;

    private String name;

    private String description;

    private boolean oauthRequired;

    private String oauthProvider;
    // GOOGLE, SLACK, NOTION

    @OneToMany(mappedBy = "agent")
    private List<Subscription> subscriptions = new ArrayList<>();

}
