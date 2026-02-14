package com.example.botcraft.Controllers;

import com.example.botcraft.Modal.ApiResponseWrapper;
import com.example.botcraft.Modal.Bot;
import com.example.botcraft.Services.BotServices;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bot")
@RequiredArgsConstructor
public class BotController {

    private final BotServices botService;

    @PostMapping("/{userId}")
    public ResponseEntity<ApiResponseWrapper<Bot>> createBot(
            @PathVariable String userId,
            @RequestBody Bot bot) {

        Bot created = botService.createBot(userId, bot);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new ApiResponseWrapper<>(true, "Bot created", created));
    }

    @GetMapping("/{botId}")
    public ResponseEntity<ApiResponseWrapper<Bot>> getBot(@PathVariable String botId) {
        return ResponseEntity.ok(
                new ApiResponseWrapper<>(true, "Bot fetched", botService.getBot(botId))
        );
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<ApiResponseWrapper<List<Bot>>> getUserBots(@PathVariable String userId) {
        return ResponseEntity.ok(
                new ApiResponseWrapper<>(true, "Bots fetched", botService.getUserBots(userId))
        );
    }

    @DeleteMapping("/{botId}")
    public ResponseEntity<ApiResponseWrapper<?>> deleteBot(@PathVariable String botId) {
        botService.deleteBot(botId);
        return ResponseEntity.ok(
                new ApiResponseWrapper<>(true, "Bot deleted", null)
        );
    }
}
