package com.example.botcraft.Modal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Bot {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private String botId;
    @OneToOne
    @JoinColumn(name = "owner_id") // jpa by default map it by the primary key of the user table and name it the owner_id
    private User owner;
}
