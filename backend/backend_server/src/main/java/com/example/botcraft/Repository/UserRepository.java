package com.example.botcraft.Repository;

import com.example.botcraft.Modal.Bot;
import com.example.botcraft.Modal.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,String> {
    User findByEmail(String email);
    boolean existsByEmail(String email);
}
