package com.example.botcraft.Handlers;

import com.example.botcraft.Modal.RefreshToken;
import com.example.botcraft.Modal.User;
import com.example.botcraft.Repository.UserRepository;
import com.example.botcraft.Services.JwtService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class OAuth2LoginSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {

    private final UserRepository userRepo;
    private final JwtService jwtService;
//    private final RefreshTokenService refreshService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException {

        OAuth2User oAuthUser = (OAuth2User) authentication.getPrincipal();
        String email = oAuthUser.getAttribute("email");

        // find pre-signed user
        User user = userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not registered"));

        String access = jwtService.generateAccessToken(user.getUserId(), email);
        RefreshToken refresh = jwtService.generateAccessToken(user.getUserId(),user.getEmail());

        response.setContentType("application/json");
        response.getWriter().write("""
            {
              "accessToken": "%s",
              "refreshToken": "%s"
            }
        """.formatted(access, refresh.getToken()));
    }
}
