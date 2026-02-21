package com.example.botcraft.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Bot {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String botId;
    @Column
    private String context;
    @OneToOne
    @JoinColumn(name = "owner_id") // jpa by default map it by the primary key of the user table and name it the owner_id
    private User owner;

    // Bots can use multiple agents
    @ManyToMany
    private List<Agent> agents = new ArrayList<>();
}
