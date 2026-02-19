package com.example.botcraft.Configuration;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.core.JdbcOperations;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.security.oauth2.client.*;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;

import javax.sql.DataSource;

@Configuration
@RequiredArgsConstructor
public class Oauth2BeanConfig {
    private final DataSource dataSource;

    @Bean
    public OAuth2AuthorizedClientService authorizedClientService(
            ClientRegistrationRepository repo) {
        JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);
        return new JdbcOAuth2AuthorizedClientService(jdbcTemplate, repo);
    }

    // OAuth2AuthorizedClientManager with refresh support
    @Bean
    public OAuth2AuthorizedClientManager authorizedClientManager(
            ClientRegistrationRepository repo,
            OAuth2AuthorizedClientService service) {

        OAuth2AuthorizedClientProvider provider =
                OAuth2AuthorizedClientProviderBuilder.builder()
                        .authorizationCode()
                        .refreshToken()
                        .build();

        AuthorizedClientServiceOAuth2AuthorizedClientManager manager =
                new AuthorizedClientServiceOAuth2AuthorizedClientManager(repo, service);

        manager.setAuthorizedClientProvider(provider);

        return manager;
    }
}
