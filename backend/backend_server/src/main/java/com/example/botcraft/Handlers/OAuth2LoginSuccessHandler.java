package com.example.botcraft.Handlers;

import com.example.botcraft.Modal.TokenPair;
import com.example.botcraft.Services.Oauth2Service;
import jakarta.servlet.http.Cookie;
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

   private final Oauth2Service oauth2Service;
//    private final RefreshTokenService refreshService;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication)
            throws IOException {

        OAuth2User oAuthUser = (OAuth2User) authentication.getPrincipal();
        String email;
        String refresh;
        String access;
        if(oAuthUser!=null){
             email = oAuthUser.getAttribute("email");
        }
        else {
             response.sendError(500);
             return;
        }

        TokenPair tokens = oauth2Service.generateToken(
                oAuthUser.getAttribute("email"),
                oAuthUser.getAttribute("name")
        );

        Cookie accessCookie= new Cookie("access_token",tokens.getAccessToken());
        accessCookie.setSecure(true);
        accessCookie.setMaxAge(86400000);
        accessCookie.setHttpOnly(true);

        Cookie refreshCookie= new Cookie("refresh_token",tokens.getRefreshToken());
        refreshCookie.setHttpOnly(true);
        refreshCookie.setSecure(true);
        refreshCookie.setMaxAge(172800000);

        response.addCookie(accessCookie);
        response.addCookie(refreshCookie);
        response.sendRedirect("http://localhost:8080/user/health-check");
    }
}
