package com.example.botcraft.Configuration;

import com.example.botcraft.Handlers.OAuth2LoginSuccessHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final OAuth2LoginSuccessHandler successHandler;

    @Bean
    SecurityFilterChain securityFilterChain (HttpSecurity http){
       return http.csrf(AbstractHttpConfigurer::disable) // disable cross site request forgery
                .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authorizeHttpRequests(auth->
                        auth.anyRequest().permitAll()
                        )
                .formLogin(AbstractHttpConfigurer::disable)
               .oauth2Login(oauth -> oauth
                       .successHandler(successHandler)
               )
                .build();


    }
}
