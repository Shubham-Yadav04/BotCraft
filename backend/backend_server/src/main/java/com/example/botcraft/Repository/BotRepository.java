package com.example.botcraft.Repository;

import com.example.botcraft.Modal.Bot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BotRepository extends JpaRepository<Bot,String> {
    List<Bot> findByOwnerUserId(String userId);
    }
