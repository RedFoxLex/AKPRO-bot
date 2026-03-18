#!/bin/bash

# Скрипт для перезапуска бота с sudo

echo "Перезапуск AKPRO Bot (sudo)..."

# Останавливаем бота
sudo pkill -f "node src/bot.js"

# Ждём 2 секунды
sleep 2

# Запускаем бота
sudo node src/bot.js &

echo "Бот перезапущен!"