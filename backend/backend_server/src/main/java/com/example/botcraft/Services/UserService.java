package com.example.botcraft.Services;

import com.example.botcraft.Modal.Bot;
import com.example.botcraft.Modal.User;
import com.example.botcraft.Repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class UserService {

    private final UserRepository userRepository;
UserService (UserRepository userRepository){
    this.userRepository=userRepository;
}

    public User createUser(User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        return userRepository.save(user);
    }


    public User getUserById(String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }

    public User getUserByEmail(String email) {
        return userRepository.findById(email)
                .orElseThrow(() -> new RuntimeException("User not found"));
    }


    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
    public User updateUser(String id, User updatedUser) {
        User existing = getUserById(id);

        existing.setUsername(updatedUser.getUsername());
        existing.setBio(updatedUser.getBio());
        //  email updates not allowed or requires a re-verification
        return userRepository.save(existing);
    }
    public void deleteUser(String id) {
        User user = getUserById(id);
        userRepository.delete(user); // bots auto deleted because CascadeType.REMOVE
    }
}
