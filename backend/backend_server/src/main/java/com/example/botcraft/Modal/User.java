package com.example.botcraft.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Users")
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String userId;

    @Column
    private String username;

    @Column(unique = true,nullable = false)
    private String email;
    @Column
    private String refreshToken;
@Column
    private String bio;
    @OneToMany(mappedBy = "owner",cascade = CascadeType.REMOVE) // if user deleted remove its bots
    List<Bot> userBots= new ArrayList<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.REMOVE)
    private List<Subscription> subscriptions = new ArrayList<>();
}
