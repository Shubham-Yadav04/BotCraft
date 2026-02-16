package com.example.botcraft.Services;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService
{

    private final SecretKey key;
    private final long accessExp;
    private final long refreshExp;

    public JwtService(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.access.expiration}") long accessExp,
            @Value("${jwt.refresh.expiration}") long refreshExp
    ) {
        this.key = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.accessExp = accessExp;
        this.refreshExp = refreshExp;
    }
    public String generateAccessToken(String userId, String email) {
        return Jwts.builder()
                .subject(userId)
                .claim("email", email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + accessExp))
                .signWith(key)
                .compact();
    }
    public String generateRefreshToken(String userId, String email) {
        return Jwts.builder()
                .subject(userId)
                .claim("email", email)
                .issuedAt(new Date())
                .expiration(new Date(System.currentTimeMillis() + refreshExp))
                .signWith(key)
                .compact();
    }


    public String extractUserId(String token) {
        return Jwts.parser()
                .verifyWith(key)     // NEW
                .build()
                .parseSignedClaims(token)   // NEW
                .getPayload()
                .getSubject();
    }
    public Claims extractClaims(String token) {
        return Jwts.parser()
                .verifyWith(key)
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }
    public boolean validate(String token) {
        try {
            Jwts.parser()
                    .verifyWith(key)

                    .build()
                    .parseSignedClaims(token);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}
