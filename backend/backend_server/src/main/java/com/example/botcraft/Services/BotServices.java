package com.example.botcraft.Services;

import com.example.botcraft.Modal.Bot;
import com.example.botcraft.Modal.User;
import com.example.botcraft.Repository.BotRepository;
import com.example.botcraft.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BotServices {

    private final BotRepository botRepo;
    private final UserRepository userRepo;

    public Bot createBot(String userId, Bot bot) {
        User user = userRepo.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));

        bot.setOwner(user);

        return botRepo.save(bot);
    }

    public Bot getBot(String botId) {
        return botRepo.findById(botId)
                .orElseThrow(() -> new RuntimeException("Bot not found"));
    }

    public List<Bot> getUserBots(String userId) {
        if (!userRepo.existsById(userId))
            throw new RuntimeException("User not found");

        return botRepo.findByOwnerUserId(userId);
    }

    public void deleteBot(String botId) {
        Bot bot = getBot(botId);
        botRepo.delete(bot);
    }
}
