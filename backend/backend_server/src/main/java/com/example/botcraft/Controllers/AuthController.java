package com.example.botcraft.Controllers;

import com.example.botcraft.Modal.User;
import com.example.botcraft.Services.JwtService;
import com.example.botcraft.Services.UserService;
import com.nimbusds.oauth2.sdk.TokenResponse;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final JwtService jwtService;

    @PostMapping("refresh")
    public TokenResponse refresh(@RequestBody String refreshToken) {
        Claims claim = jwtService.extractClaims(refreshToken);
        if (jwtService.validate(refreshToken)) {
            User user = userService.getUserById(claim.getSubject());

            String access = jwtService.generateAccessToken(user.getUserId(), user.getEmail());
            return null;
        }

return null;
    }
}
