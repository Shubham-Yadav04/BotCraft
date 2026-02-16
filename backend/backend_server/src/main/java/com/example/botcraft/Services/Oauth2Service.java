package com.example.botcraft.Services;

import com.example.botcraft.Modal.TokenPair;
import com.example.botcraft.Modal.User;
import com.example.botcraft.Repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class Oauth2Service {
 private final UserRepository userRepository;
 private final JwtService jwtService;
    @Transactional
    public TokenPair generateToken(String email,String name){

        User user = userRepository.findByEmail(email);
        if (user == null) {
            user = new User();
            user.setEmail(email);
            user.setUsername(name);
        }

        String access = jwtService.generateAccessToken(user.getUserId(), email);
        String refresh = jwtService.generateRefreshToken(user.getUserId(), email);

        user.setRefreshToken(refresh);
        userRepository.save(user);

        return new TokenPair(access, refresh);

    }
}
